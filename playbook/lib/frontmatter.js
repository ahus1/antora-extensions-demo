'use strict'

module.exports.register = function () {
    this
        .on('documentsConverted', ({ playbook, siteCatalog, contentCatalog }) => {
            // Select indexable pages
            const pages = contentCatalog.getPages((page) => {
                return page.asciidoc.attributes['front-matter'] !== undefined
            })
            if (!pages.length) return {}

            for (const page of pages) {
                console.log(`found front matter in page ${page.asciidoc.attributes.docname}:\n`, page.asciidoc.attributes['front-matter']);
            }
        })
}
