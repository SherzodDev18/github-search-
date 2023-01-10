const API_URL = "https://api.github.com/users/";
let search=document.getElementById("search");
const btn=document.getElementById("btn");
const form=document.getElementById("input");
let main=document.getElementById("result")
const getUser=async(username)=>{
    const res=await fetch(API_URL+username);
    const resDate=await res.json();
    console.log(resDate)
    userCard(resDate)
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user=search.value
    if(user){
        getUser(user)
        search.value=""
    }
})

const userCard=(user)=>{
    const cardHtml=`
    <div class="solid">
    <div class="card">
        <img class="avatar" src="${user.avatar_url}">
        <h2 class="name">${user.name}</h2>
        <h3 class="login">@${user.login}</h3>

        <ul class="info">
            <ul class="follow">
                <li><strong>Followers:</strong>
                    ${user.followers}
                </li>
                <li><strong>Following:</strong>
                    ${user.following}
                </li>
                <li><strong>Repos:</strong>
                ${user.public_repos}
                </li>
            </ul>
            <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg" class="user-link-icon">
            <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="#4b6a9b"></path>
        </svg>
                    ${user.location}
                
        </ul>
    </div>
    </div>
    `
    main.innerHTML=cardHtml
}