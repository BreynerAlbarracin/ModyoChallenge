import React from 'react';
import ContainerCardsComponent from '../components/cards/container-cards.component';

function BoardGamePage() {
  return (
    <div className="h-100 p-4 overflow-auto">
      <ContainerCardsComponent />
    </div>
  );
}

export default BoardGamePage;
