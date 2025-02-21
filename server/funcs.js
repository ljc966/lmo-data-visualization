const fs = require('fs-extra');

module.exports = {
    _getSuccessMessage: (data = {}) => {
        return {
            data: data,
            message: 'success',
            code: 200,
            _t: new Date().getTime()
        };
    },
    async _getTemplateList(r) {
        await fs.readdir('./static/DataVisualizationTemplate', (err, data) => {
            const _ = [];

            data.forEach(i => {
                _.push(
                    {
                        id: `lmo_data_visualization_template_${i}`,
                        url: `/static/DataVisualizationTemplate/${i}/index.html`,
                        cover: `/static/DataVisualizationTemplate/${i}/cover.png`,
                        template: `${i}`,
                        ...require('./const/templateIndex')[i]
                    }
                );
            });
            r.json(
                require('./funcs')._getSuccessMessage({
                    list: _
                })
            );
        });
    },
    _getMedia: (r) => {
        const _outputDir = './static/output';

        if (!fs.existsSync(_outputDir)) {
            fs.mkdir(_outputDir);
        }
        fs.readdir('./static/output', (err, data) => {
            const _ = [];

            data.forEach(i => {
                if (i.split('.')[1] === 'mp4') {
                    _.push({
                        name: i,
                        path: `/static/output/${i}`
                    });
                }
            });
            r.json(
                require('./funcs')._getSuccessMessage({
                    list: _
                })
            );
        });
    },
    _stringify(data = {}) {
        return JSON.stringify(data);
    }
};