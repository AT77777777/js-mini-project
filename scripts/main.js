fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let container = document.createElement('div');
        container.classList.add('w-1013');

        let header = document.createElement('header');

        let usersH1 = document.createElement('h1');
        usersH1.innerText = 'Users';
        usersH1.classList.add('users')

        header.appendChild(usersH1);
        container.appendChild(header);

        let userSection = document.createElement('section');
        userSection.classList.add('user-section')

        data.map(user => {
            let userDiv = document.createElement('div');

            userDiv.classList.add('user-div');

            let userImg = document.createElement('img');
            userImg.src = `https://ui-avatars.com/api/?background=random&name=${user.name}`;
            userImg.alt = `${user.name}`;
            userImg.classList.add('user-img');

            let userInnerDiv = document.createElement('div');

            let userH2 = document.createElement('h2');
            userH2.innerText = `${user.name}`;
            userH2.classList.add('user-name');

            let userP = document.createElement('p');
            userP.innerText = `id: ${user.id}`;
            userP.classList.add('user-id');

            let userA = document.createElement('a');
            userA.classList.add('user-a')
            userA.innerText = 'details';
            userA.href = 'user-details.html?user=' + JSON.stringify(user.id);

            userInnerDiv.append(userH2, userP, userA);
            userDiv.append(userImg, userInnerDiv);
            userSection.appendChild(userDiv)
            container.appendChild(userSection);
        })

        document.body.appendChild(container);
    });

