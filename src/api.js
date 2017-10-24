/**
 * Created by niC00L on 25/10/17.
 */

const Api = {
    menu: [
        {key: 0, slug: 'home', title: 'Home'},
        {key: 1, slug: 'about', title: 'About'},
        {key: 2, slug: 'portfolio', title: 'Portfolio'},
        {key: 3, slug: 'blog', title: 'Blog'},
        {key: 4, slug: 'contact', title: 'Contact'}
    ],
    items: [],
    get: function (folder, lang) {
        // var pes = fetch('/json/' + folder + '/' + lang + '.json', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((response) => {
        //         this.items = response;
        //         console.log("ITEMSSS", response);
        //         console.log("ITEMS", this.items);
        //     });
        var pes = JSON.parse("./json/" + folder + '/' + lang + '.json');
        console.log("ITEMS", this.items);
        console.log("pes", pes);
        return this.items;
    }
};

export default Api;