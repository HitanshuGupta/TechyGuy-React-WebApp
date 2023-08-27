import React from 'react'
import vg from "../assets/2.webp"

const Home = () => {
  return (
		<>
			<div className="home">
				<main>
					<h1>TechyGuy</h1>
					<p>Solution of Your all Problems</p>
				</main>
			</div>

			<div className="home2">
				<img src={vg} alt="Graphics" />

				<div>
					<p>
						We are your one and only solution to the tech problems you face
						every day. We are leading tech company whose aim is to increase the
						problem solving ability in children.
					</p>
				</div>
			</div>

            <div className="home3">

                <div>
                    <h1>Who we are?</h1>
                    <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus harum quae vitae quos temporibus rem reprehenderit magni tempore asperiores excepturi possimus impedit consectetur neque aliquam veniam accusamus labore commodi voluptatibus quam, consequuntur maxime aperiam expedita. Sit iusto delectus dolores aspernatur tempora animi, repellat saepe hic consequuntur iste id error nesciunt!   
                    </p>
                </div>
            </div>
		</>
	);
}

export default Home