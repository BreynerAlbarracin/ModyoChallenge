import React from 'react';
import ContainerCardsComponent from '../components/cards/container-cards.component';

function BoardGamePage() {
  return (
    <div className="h-100 p-5 overflow-auto">
      <ContainerCardsComponent />
    </div>
  );
}

export default BoardGamePage;
