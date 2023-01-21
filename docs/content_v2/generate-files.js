const fs = require('fs');

fs.mkdirSync('build/generated-files/modules/ROOT/pages', { recursive: true })

fs.writeFileSync('build/generated-files/modules/ROOT/pages/generated.adoc',
    `= Generated content

This is some generated content.`);
