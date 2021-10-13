import { createSegmentRecorder } from '..';

const header = `# Roger's World Analytics Web SDK`;

const template = (analytics: any) => {
  return [header, extractDocsMd({ analytics })].join('\n\n');
};

const extractDocsMd = (section: any, path = []): string => {
  return Object.entries(section)
    .flatMap(([key, subsection]: any) => {
      const subpath = path.concat(key);

      if (typeof subsection === 'function') {
        if (!subsection.requiredContext) {
          return '';
        }

        const contextKeysMd = subsection.requiredContext
          .map((ctxKey: string) => `_${ctxKey}_`)
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

(globalThis as any).analytics = {};
console.log(template(createSegmentRecorder()));
