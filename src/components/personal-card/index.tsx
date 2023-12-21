import Image from "next/image";

function PersonalCard() {
  return (
    <>
      <Image
        src="/img/temp_1.png"
        alt="some image"
        width={1000} // Set the desired width of the image
        height={300}
      />
      <h1>show the personal card</h1>
    </>
  );
}

export default PersonalCard;
