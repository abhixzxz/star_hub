const Apple = () => {
    const handleClick = (event, message) => {
        // 👇️ refers to the image element
        console.log(event.target);

        console.log(message);

        console.log('Image clicked');
    };

    return (
        <div>
            <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                alt="car"
                onClick={(event) => handleClick(event, 'hello')}
            />
        </div>
    );
};
export default Apple;