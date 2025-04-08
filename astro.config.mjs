import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

const app = express();

app.set('view engine', 'pug');

app.get("/", async (req, res) => {
  const records = await getPokemon();
  res.render('accounts', { title: 'Pokemon', records });
  //console.log(records)
})

export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://feature-tour.netlify.app'
    })
  ],
});
