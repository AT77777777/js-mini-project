

let postUrl = new URL(location.href);

let post = postUrl.searchParams.get('post');



fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then(
        res => res.json())
    .then(
        data => {
            let postDetailsSection = document.createElement('section');
            postDetailsSection.classList.add('post-details-section');

            let postDetailsH3 = document.createElement('h3');
            postDetailsH3.innerText = `${data.title}`;
            postDetailsH3.classList.add('post-title');

            let postDetailsUl = document.createElement('ul');
            postDetailsUl.classList.add('post-details-ul');

            for (const dataKey in data) {
                let postDetailsLi = document.createElement('li');

                let postDetailsKey = document.createElement('span');
                postDetailsKey.classList.add('post-details-p');
                postDetailsKey.innerText = `${dataKey}: `;

                let postDetailsItem = document.createElement('span');
                postDetailsItem.classList.add('post-details-span');
                postDetailsItem.innerText = `${data[dataKey]}`;

                postDetailsLi.append(postDetailsKey, postDetailsItem);
                postDetailsUl.appendChild(postDetailsLi);
            }

            postDetailsSection.append(postDetailsH3, postDetailsUl);

            // fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
            //     .then(
            //         res => res.json())
            //     .then(
            //         comments => {
            //             console.log(comments)
            //             let commentsSection = document.createElement('section');
            //             commentsSection.classList.add('comments-details-section');
            //
            //             let commentDiv = document.createElement('div');
            //             commentDiv.classList.add('comment-div');
            //
            //             let commentsDetailsUl = document.createElement('ul');
            //
            //             for (const item in comments) {
            //                 let commentsDetailsLi = document.createElement('li');
            //
            //                 let commentsDetailsKey = document.createElement('span');
            //                 commentsDetailsKey.classList.add('post-details-p');
            //                 commentsDetailsKey.innerText = `${item}: `;
            //
            //                 let commentsDetailsItem = document.createElement('span');
            //                 commentsDetailsItem.classList.add('post-details-span');
            //                 commentsDetailsItem.innerText = `${comments[item]}`;
            //
            //                 commentsDetailsLi.append(commentsDetailsKey, commentsDetailsItem);
            //                 commentsDetailsUl.appendChild(commentsDetailsLi);
            //             }
            //             commentDiv.appendChild(commentsDetailsUl)
            //             commentsSection.appendChild(commentDiv);
            //
            //         }
            //     )

            document.body.append(postDetailsSection);

            fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
                .then(
                    res => res.json())
                .then(
                    data => {
                        let commentsSection = document.createElement('section');
                        commentsSection.classList.add('comments-section');

                        for (const dataKey in data) {
                            console.log(data[dataKey].email);
                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment-div');

                            let commentPostIdP = document.createElement('p');
                            commentPostIdP.classList.add('comment-p');
                            commentPostIdP.innerText = `postId: ${data[dataKey].postId}`;

                            let commentIdP = document.createElement('p');
                            commentIdP.classList.add('comment-p');
                            commentIdP.innerText = `id: ${data[dataKey].id}`;

                            let commentNameP = document.createElement('p');
                            commentNameP.classList.add('comment-p');
                            commentNameP.innerText = `name: ${data[dataKey].name}`;

                            let commentEmailP = document.createElement('p');
                            commentEmailP.classList.add('comment-p');
                            commentEmailP.innerText = `email: ${data[dataKey].email}`;

                            let commentBodyP = document.createElement('p');
                            commentBodyP.classList.add('comment-p');
                            commentBodyP.innerText = `body: ${data[dataKey].body}`;

                            commentDiv.append(commentPostIdP, commentIdP, commentNameP, commentEmailP, commentBodyP);
                            commentsSection.appendChild(commentDiv);

                        }


                        document.body.append(commentsSection);
                    })
        })



