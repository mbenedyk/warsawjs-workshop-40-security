const files = ["home.html","contact.html"];


const pageContent = document.querySelector("#page");

const fileUrl = './pages/home.html'; // provide file location

readHome();

async function readHome()
{
    await navigate('home.html');
}

async function navigate(page){
    if(!files.includes(page)){
        console.warn("access denied");
        return;
    }
    
    let response = await fetch('pages/'+page);
    let content = await response.text();
    pageContent.innerHTML = content;
}

window.addEventListener('hashchange', () => {
    console.log(location.hash)
    navigate(location.hash.substring(2));
});