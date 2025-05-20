import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-start min-h-dvh py-24">
      <div className="container max-w-4xl bg-white p-8 rounded-4xl flex flex-col gap-8">
        <Image
          src="/omelette.jpeg"
          width={1312}
          height={600}
          alt="A tasty omelette! Enjoy."
          className="rounded-2xl"
        />
        <h1 className="text-black text-5xl font-outfit font-bold">
          Simple Omelette Recipe
        </h1>

        {/* Description */}
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        {/* Preparation */}
        <div>
          <h2>Preparation time</h2>
          <ul>
            <li>
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation:</strong> 5 minutes
            </li>
            <li>
              <strong>Cooking:</strong> 5 minutes
            </li>
          </ul>
        </div>

        {/* Ingredients */}
        <div>
          <h2>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Pepper, to taste</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2>Instructions</h2>
          <ol className="list-decimal list-inside">
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan:</strong> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper
              if needed.
            </li>
          </ol>
        </div>

        {/* Nutrition */}
        <div>
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full table-fixed">
            <tbody className="*:border-b *:border-brown-800">
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
