import { createTagManagerRecorder, Recorder } from '../src';

const header = `# Roger's World Analytics Web SDK`;

const styles = `<style>

section {
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.2);
}

</style>`;

const template = (analytics: Recorder) => {
  return [header, extractDocsMd({ analytics }), styles].join('\n\n');
};

const extractDocsMd = (section: Recorder, path: string[] = []): string => {
  return Object.entries(section)
    .flatMap(([key, subsection]) => {
      const subpath = path.concat(key);
      let headerMd = `__${key}__`;

      if (typeof subsection === 'function') {
        const contextKeysMd = subsection.requiredContext
          .map((key) => `_${key}_`)
          .concat(subsection.optionalContext);

        return [
          '<section>',
          headerMd,
          section.recordingName,
          '<code>' +
            subpath.join('.') +
            (contextKeysMd.length > 0
              ? `({ ${contextKeysMd.join(', ')} })`
              : '()') +
            '</code>',
          '</section>',
        ];
      } else {
        return [
          '<section>',
          headerMd,
          extractDocsMd(subsection, subpath),
          '</section>',
        ];
      }
    })
    .join('\n\n');
};

console.log(template(createTagManagerRecorder([])));
