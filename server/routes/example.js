export default function (server) {

  server.route({
    path: '/api/kibana_leaflet_sample/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
