# A Kibana Leaflet sample plugin

![Image of Kibana Leaflet plugin](https://amsterdam.luminis.eu/wp-content/uploads/2016/06/kibana-leaflet-plugin.png)

> A sample kibana plugin with leaflet 

---

Read the blog for more instructions:
[https://amsterdam.luminis.eu/2016/04/07/developing-kibana-plugins/](https://amsterdam.luminis.eu/2016/04/07/developing-kibana-plugins/)

## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

<dl>
  <dt><code>npm start</code></dt>
  <dd>Start kibana and have it include this plugin</dd>

  <dt><code>npm run build</code></dt>
  <dd>Build a distributable archive</dd>

  <dt><code>npm run test:browser</code></dt>
  <dd>Run the browser tests in a real web browser</dd>

  <dt><code>npm run test:server</code></dt>
  <dd>Run the server tests using mocha</dd>
</dl>

For more information about any of these commands run `npm run ${task} -- --help`.
