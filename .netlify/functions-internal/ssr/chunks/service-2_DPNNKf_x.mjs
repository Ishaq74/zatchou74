import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"création-de-site-internet-sur-mesure\">Création de Site Internet Sur Mesure</h1>\n<p>Nous offrons des consultations personnalisées pour mieux comprendre votre horoscope et vous guider dans votre vie quotidienne.</p>";

				const frontmatter = {"title":"Création de Site Internet Sur Mesure","description":"Nous offrons des consultations personnalisées pour mieux comprendre votre horoscope.","tags":"Catégorie 1","image":"service-1.webp","icon":"icon icon-write","atoutsservices":[{"title":"Formation en Ligne","text":"Découvrez nos formations en ligne sur le recrutement gagnant, disponibles à tout moment.","icon":"https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"},{"title":"Formation Présentiel","text":"Participez à nos formations en présentiel pour une expérience immersive et interactive.","icon":"https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"},{"title":"Coaching Personnalisé","text":"Bénéficiez d'un accompagnement personnalisé pour optimiser votre processus de recrutement.","icon":"https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"}]};
				const file = "C:/Users/Utilisateur/zatchou74/src/content/services/service-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Création de Site Internet Sur Mesure\r\n\r\nNous offrons des consultations personnalisées pour mieux comprendre votre horoscope et vous guider dans votre vie quotidienne.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"création-de-site-internet-sur-mesure","text":"Création de Site Internet Sur Mesure"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
