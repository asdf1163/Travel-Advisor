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
    return tempLink.map((data, index) => <img key={`img${index}`} src={data.url} alt={`img${index}`}/>)
}

export default UserImages