export default function (kibana) {
    return new kibana.Plugin({
        require: ['elasticsearch'],

        uiExports: {
            app: {
                title: 'Kibana Leaflet Sample',
                description: 'Sample kibana leaflet plugin',
                main: 'plugins/kibana_leaflet_sample/app'
            }
        },

        config(Joi) {
            return Joi.object({
                enabled: Joi.boolean().default(true),
            }).default();
        },

        init(server, options) {
            // Add server routes and initalize the plugin here
        }

    });
};
