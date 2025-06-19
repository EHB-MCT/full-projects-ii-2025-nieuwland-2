const baseURL = 'http://127.0.0.1:8090/api/collections/posts/records';
const blogContainer = document.getElementById('blog-container');
const form = document.getElementById('post-form');

async function fetchAndDisplayBlogPosts() {
	try {
		const res = await fetch(baseURL);
		const data = await res.json();

		blogContainer.innerHTML = '';

		if (Array.isArray(data.items)) {
			data.items.reverse().forEach((post, index) => {
				const div = document.createElement('div');
				div.className = `item-${index + 1}`;

				const title = post.title || 'Geen titel';
				const date = post.created ? new Date(post.created).toLocaleDateString('nl-BE') : 'Datum onbekend';
				const text = post.text || '';
				const photoURL = post.photo
					? `http://127.0.0.1:8090/api/files/posts/${post.id}/${post.photo}`
					: '';

				div.innerHTML = `
					<div class="title">
						<h2>${title}</h2>
						<h3>${date}</h3>
					</div>
					${photoURL ? `<img src="${photoURL}" class="post_${index + 1}">` : ''}
					<p>${text}</p>
				`;
				blogContainer.appendChild(div);
			});
		} else {
			blogContainer.innerHTML = '<p>Geen blogposts gevonden.</p>';
		}
	} catch (err) {
		console.error('Fout bij laden van blogposts:', err);
		blogContainer.innerHTML = '<p>Er ging iets mis bij het ophalen van de posts.</p>';
	}
}

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const title = document.getElementById('title-input').value;
	const text = document.getElementById('text-input').value;
	const imageFile = document.getElementById('image-input').files[0];

	const formData = new FormData();
	formData.append('title', title);
	formData.append('text', text);
	if (imageFile) formData.append('photo', imageFile);

	try {
		const res = await fetch(baseURL, {
			method: 'POST',
			body: formData
		});

		const data = await res.json();
		if (res.ok) {
			form.reset();
			fetchAndDisplayBlogPosts();
		} else {
			alert("Posten mislukt: " + JSON.stringify(data));
		}
	} catch (err) {
		console.error("Fout bij posten:", err);
	}
});

fetchAndDisplayBlogPosts();