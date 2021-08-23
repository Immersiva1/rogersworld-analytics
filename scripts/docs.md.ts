import { createTagManagerRecorder, Recorder } from '../src';

const header = `# Roger's World Analytics Web SDK`;

const template = (analytics: Recorder) => {
  return [header, extractDocsMd({ analytics })].join('\n\n');
};

const extractDocsMd = (section: Recorder, path: string[] = []): string => {
  return Object.entries(section)
    .flatMap(([key, subsection]) => {
      const subpath = path.concat(key);

      if (typeof subsection === 'function') {
        const contextKeysMd = subsection.requiredContext
          .map((ctxKey) => `_${ctxKey}_`)
          .concat(subsection.optionalContext);

        return [
          '<section>',
          `__${[subsection.recordingName].flat().join(' / ')}__`,
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
          `${'#'.repeat(path.length + 2)} ${key}`,
          extractDocsMd(subsection, subpath),
          '</section>',
        ];
      }
    })
    .join('\n\n');
};

console.log(template(createTagManagerRecorder([])));
