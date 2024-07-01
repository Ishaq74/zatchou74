const id = "post3.md";
						const collection = "posts";
						const slug = "post3";
						const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim, et ultricies tortor. Praesent sit amet accumsan ligula.\r\n\r\n## Titre H2\r\n\r\nEtiam et nunc nec ligula ullamcorper dapibus. Nullam ut malesuada magna, vel scelerisque ligula.\r\n\r\n### Titre H3\r\n\r\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vehicula lacus in metus convallis, non pharetra tortor gravida.\r\n\r\n#### Titre H4\r\n\r\nCras venenatis nisl in nisl pretium, in auctor mi sagittis.\r\n\r\n##### Titre H5\r\n\r\nNam pharetra nulla ac lacus suscipit, ac tincidunt felis fermentum.\r\n\r\n###### Titre H6\r\n\r\nAliquam erat volutpat. Sed posuere dapibus massa, sed fringilla risus ullamcorper et.\r\n\r\n---\r\n\r\n## Paragraphe\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n\r\n## Liste Non Ordonnée\r\n\r\n- Item 1\r\n- Item 2\r\n  - Sous-item 1\r\n  - Sous-item 2\r\n- Item 3\r\n\r\n## Liste Ordonnée\r\n\r\n1. Première tâche\r\n2. Deuxième tâche\r\n   1. Sous-tâche 1\r\n   2. Sous-tâche 2\r\n3. Troisième tâche\r\n\r\n## Lien\r\n\r\nVoici un [lien vers OpenAI](https://www.openai.com).\r\n\r\n## Image\r\n\r\n![Image de Test](https://via.placeholder.com/150 \"Image Placeholder\")\r\n\r\n## Code\r\n\r\nVoici un exemple de code en JavaScript :\r\n\r\n```js\r\nfunction sayHello() {\r\n  console.log(\"Hello, world!\");\r\n}\r\n";
						const data = {title:"Titre Article 3 Custom OK",description:"Description custom OK",tags:"Catégorie 1",image:
						new Proxy({"src":"/_astro/post-1.-U72XWDJ.webp","width":4608,"height":3456,"format":"webp","fsPath":"C:/Users/Utilisateur/zatchou74/src/content/posts/post-1.webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/zatchou74/src/content/posts/post-1.webp";
							}
							
							return target[name];
						}
					})
					,date:new Date(1755993600000),author:{slug:"author-1",collection:"team"},relatedPosts:[{slug:"post-1",collection:"posts"}]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Utilisateur/zatchou74/src/content/posts/post3.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
