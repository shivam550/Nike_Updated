import React from 'react';

function ShoeCard({ imgURL, changeBigShoeImg, bigShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className='flex
       justify-center
        items-center
         bg-card
         bg-center 
         bg-cover
         sm:40 rounded-xl max-sm:flex-1' >
        <img src={imgURL.thumbnail} alt="Shoe Thumbnail"
        width={127}
        height={103}
         className='object-contain'    
        />
      </div>
    </div>
  );
}

export default ShoeCard;
