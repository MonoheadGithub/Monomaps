var mmAdblock = true; //If adblock is enabled, Monomaps.html won't be able to receive mmAdblock = true.
let mmAds = localStorage.getItem("mmAds");

if(!mmAds){
    localStorage.setItem('mmAds', 'disabled');
}

if(mmAds === 'disabled'){
    mmAdblock = false;
    adContainer.remove();
}

const ads = [
    {
        name: 'Monohead Ads',
        user: 'Jet',
        url: '#',
        image: 'monomapsAds.png',
        duration: 20,
        partner: true
    },
    {
        name: 'Cult of Milk Org',
        user: 'Jet',
        url: 'https://monolithservers.com/forums/threads/the-cult-of-milk.37683/?ref=https://www.monohead.dev/',
        image: 'cultofmilk.jpg',
        duration: 10,
        partner: true
    },
    {
        name: 'Monocars',
        user: 'Marwan',
        url: 'https://marw0n.github.io/MonoCars/',
        image: 'monocars.jpg',
        duration: 10,
        partner: true
    }
]

if(localStorage.getItem('mmAds') === 'enabled'){
document.body.insertAdjacentHTML('beforeend', `<div class='monomaps-maps-ads' id='monomaps-maps-ads' data-ads-display="forever">
<span class='adbadge' id='adbadge'>Ad</span>

<a onclick='dismissAd()' class='adbadge' id='adDismiss' style="float: right; cursor: default;">X</a>
<a class='adbadge' id='adSkip' style="float: right; cursor: default;"><i class='fa-solid fa-rotate'></i></a>
</div>`)


var AdTimer;
}

let adContainer = document.querySelector('#monomaps-maps-ads');

function ShowMMAd() {
    const adDimiss = document.querySelector('#adDismiss');
    adDimiss.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    let randomAd = Math.floor(Math.random() * ads.length);
    let dir = './assets/monomaps/ads/'
    adContainer.style.background = `url('${dir}${ads[randomAd].image}')`;
    adContainer.style.backgroundSize = '700px 100px';
    adContainer.style.cursor = 'pointer';
    adContainer.setAttribute('onclick', `window.open("${ads[randomAd].url}","_blank")`)
    let badge = document.getElementById('adbadge');
    let badgeTimer = ads[randomAd].duration;

    AdTimer = setInterval(() => {
        badgeTimer -= 1;
        if(ads[randomAd].partner === true){badge.innerHTML = "<span class='verified'><i class='fas fa-check'></i></span> Ad " + badgeTimer;}else{badge.innerHTML = "Ad " + badgeTimer;}
        if(badgeTimer <= '0'){
            if(adContainer.dataset.adsDisplay === 'forever'){
                clearInterval(AdTimer);
                ShowMMAd();
            }else{
                clearInterval(AdTimer);
                adContainer.remove();
            }
        }
    }, 1000);

    document.getElementById('adSkip').addEventListener('click', (e) => {
        e.stopPropagation();
        clearInterval(AdTimer);
        ShowMMAd();
    })
}

function dismissAd() {
    clearInterval(AdTimer);
    adContainer.remove();
}

if(localStorage.getItem('mmAds') === 'enabled'){
    ShowMMAd();
}
