import React from 'react';

function Card({ sailing }) {
	return (
		<div className="tc wrapper dib br3 pa3 ma2 grow bw2 shadow-5">
			<div className="booking-card-wrapper">
				<div className="booking-card-image">
					<img className="booking-card-image" src={ sailing.image } alt = ""/>
				</div>
				<div className="booking-card-content">
					<div className="booking-card-description">
						<h1>{ sailing.nameKey }</h1>
						<p> { sailing.hightlighsTitle } </p>
						<br></br>
						{sailing.itineraries.map((itinerary)=>(
							itinerary.portCode ? <div className="tag">
							{itinerary.portCode}
						  </div> : ""
						))}
					</div>
					<div className="booking-card-details">
						<div className="flex">
							<i class="fa-solid fa-ship" /><span>&nbsp; &nbsp;</span> { sailing.cruiseLine.shipName } 
						</div>
						<div className="flex">
							<i class="fa-solid fa-square-dollar"></i><span>&nbsp; &nbsp;</span> { sailing.sailingPriceDetail.amount } per person*
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;