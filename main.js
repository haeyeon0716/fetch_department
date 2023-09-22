
const section = document.querySelector('section')

fetch('DB/department.json')
	.then((data) => {
        //첫번째 then 구문에 받아진 promise를 다시 바로 리턴하면
        //두번째 then구문에서 해당 데이터를 동기적으로 활용가능 
		return data.json();
	})
    .then((json) => {
        console.log(json.members);
        let tags = '';
        json.members.map(data => {
            tags += `
            <article>
                <div class = 'pic'>
                <img src='img/${data.pic}'>
                </div>
            </article>
            `;
        });

        section.innerHTML = tags;
    })
	.catch((err) => {
		console.log(err);
	});