let userUrl = new URL(location.href);

let user = userUrl.searchParams.get('user');

fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(res => res.json())
    .then(data => {
        let userDetailsContainer = document.createElement('div');
        userDetailsContainer.classList.add('w-633');

        let userDetailsSection = document.createElement('section');
        userDetailsSection.classList.add('user-details-section');

        let userDetailsImg = document.createElement('img');
        userDetailsImg.src = `https://ui-avatars.com/api/?background=random&name=${data.name}`;
        userDetailsImg.alt =`${data.name}`;
        userDetailsImg.classList.add('user-details-img');

        let userDetailsDiv = document.createElement('div');
        userDetailsDiv.classList.add('user-details-div');

        let userDetailsH2 = document.createElement('h2');
        userDetailsH2.classList.add('user-details-name');
        userDetailsH2.innerText = `${data.name}`;

        let userDetailsP = document.createElement('p');
        userDetailsP.classList.add('user-details-username');
        userDetailsP.innerText = `@${data.username}`;

        let userDetailsH3 = document.createElement('h3');
        userDetailsH3.classList.add('user-details-h3');
        userDetailsH3.innerText = 'Details';

        let userDetailsInnerDiv = document.createElement('div');
        userDetailsInnerDiv.classList.add('user-details-inner-div');

        let userDetails = (userObj) => {
            let userDetailsUl = document.createElement('ul');
            userDetailsUl.classList.add('user-details-ul');

            for (const userObjKey in userObj) {
                let userDetailsLi = document.createElement('li');

                let userDetailsItemSpan = document.createElement('span');
                userDetailsItemSpan.classList.add('user-details-item')

                let userDetailsKeySpan = document.createElement('span');
                userDetailsKeySpan.classList.add('user-details-key');

                if (typeof userObj[userObjKey] === "object" && userObj[userObjKey] !== null) {
                    userDetailsKeySpan.innerText = `${userObjKey}:`;

                    let userDetailsInnerUl = userDetails(userObj[userObjKey]);
                    userDetailsInnerUl.classList.add('user-details-inner-ul');

                    userDetailsLi.append(userDetailsKeySpan, userDetailsInnerUl);
                } else {
                    userDetailsKeySpan.innerText = `${userObjKey}: `;
                    userDetailsItemSpan.innerText = ` ${userObj[userObjKey]}`;
                    userDetailsLi.append(userDetailsKeySpan, userDetailsItemSpan);
                }

                userDetailsUl.appendChild(userDetailsLi);
            }

            return userDetailsUl;
        };

        userDetailsInnerDiv.appendChild(userDetails(data));
        userDetailsDiv.append(userDetailsH2, userDetailsP, userDetailsH3, userDetailsInnerDiv);
        userDetailsSection.append(userDetailsImg, userDetailsDiv);


        let postsButton = document.createElement('button');
        postsButton.classList.add('posts-button');
        postsButton.innerText = 'Post of current user';

        let postContainerDiv = document.createElement('div');
        postContainerDiv.classList.add('post-container');

        postsButton.onclick = () => fetch(`https://jsonplaceholder.typicode.com/users/${user}/posts`)
            .then(
                res => res.json())
            .then(data => {
                data.map(post => {
                    if (document.querySelector(`.post-div[id="${post.id}"]`)) {
                        return;
                    }

                    let postDiv = document.createElement('div');
                    postDiv.classList.add('post-div');
                    postDiv.setAttribute('id', post.id);

                    let postElement = document.createElement('a');
                    postElement.classList.add('post-element');
                    postElement.innerText = `${post.title}`;
                    postElement.href = 'post-details.html?post=' + JSON.stringify(post.id);

                    let postP = document.createElement('p');
                    postP.innerText = 'Start reading';
                    postP.classList.add('post-p');

                    let postInnerDiv = document.createElement('div');
                    postInnerDiv.classList.add('post-line');

                    postElement.append(postP, postInnerDiv);
                    postDiv.appendChild(postElement);
                    postContainerDiv.appendChild(postDiv);
                })
            })

        userDetailsContainer.append(userDetailsSection, postsButton);

        document.body.append(userDetailsContainer, postContainerDiv);
    }
)




