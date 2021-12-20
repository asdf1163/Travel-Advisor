const UserImages = () => {
    const tempLink = [
        {
            url: 'https://api.zielonamapa.pl/storage/wp-content/uploads/2020/06/edynburg.jpg',
        },
        {
            url:'https://www.transpomat.pl/sites/default/files/inline-images/shutterstock_532790395.jpg'
        },
        {
            url: 'https://bi.im-g.pl/im/cf/d9/15/z22911183V,Widok-na-Edynburg.jpg'
        }
    ]
    // tempLink.map((data)=> console.log(data))
    return tempLink.map((data) => <img src={data.url} alt={1}/>)
}

export default UserImages