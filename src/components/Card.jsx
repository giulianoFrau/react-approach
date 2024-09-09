const Card = () => {
  return (
    <div className="rounded-md">
      <img
        src="https://media.istockphoto.com/id/155380716/it/foto/aereo-volare-sopra-le-nuvole-commerciale.jpg?s=612x612&w=0&k=20&c=pz75-DlyXM_eMK6JzfQOe7-ehdkFESvdpbxVn3aCqHw="
        className="logo"
        alt="Vite logo"
      />
      <div className="flex flex-col bg-red-500">
        <h2>Titolo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, nostrum eum doloribus fuga illo blanditiis reprehenderit
          distinctio dolorem, laudantium repellendus voluptates molestiae ab
          dignissimos. Aliquid at nobis ipsam alias fugit.
        </p>
      </div>
    </div>
  );
};

export default Card;
