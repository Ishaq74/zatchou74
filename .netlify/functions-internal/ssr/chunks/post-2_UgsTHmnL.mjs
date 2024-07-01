const id = "post-2.md";
						const collection = "posts";
						const slug = "post-2";
						const body = "";
						const data = {title:"Titre Article 2 Custom OK",description:"Description custom deuxième post OK",tags:"Catégorie 2",image:
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
							filePath: "C:/Users/Utilisateur/zatchou74/src/content/posts/post-2.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
