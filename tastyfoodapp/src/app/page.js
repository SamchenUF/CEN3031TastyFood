import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <p> Tastyfood will allow you to generate a variety of different recipes using AI tailored to your preferences and needs.</p>
          <div class="flex justify-center mt-4 md:mt-8">
            {/* Button should take us to a the generating recipe page*/}
            <Link href="/genrecipes" legacyBehavior>
              <button className = "outline-sky-500 size-16 bg-custom-bluegrey hover:bg-sky-600 w-96 justify-center rounded flex items-center py-2 px-4">Generate Recipes</button>
            </Link>
          </div>
        </div>
    </main>
  );
}
