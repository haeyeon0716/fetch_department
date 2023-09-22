const section = document.querySelector('section');

fetch('DB/department.json')
	.then((data) => data.json())
	.then((json) => {
		let tags = '';
		json.members.map((data) => {
			tags += `
        <article>
          <div class='pic'>
            <img src='img/${data.pic}' >
            <img src='img/${data.pic}' >
          </div>
          <h2>${data.name}</h2>
          <p>${data.position}</p>
        </article>
      `;
		});

		section.innerHTML = tags;
	})
	.catch((err) => {
		console.log(err);
	});