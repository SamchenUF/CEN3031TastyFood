import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <p className="fixed left-0 top-0 flex w-full justify-center mt-1 md:mt-4"> Welcome to TastyFood</p>
          <div>
            <p> Tastyfood will allow you to generate a variety of different recipes using AI tailored to your preferences and needs</p>
            <div class="flex justify-center">
              <button>Generate Recipes</button>
            </div>
          </div>
      </main>
    </>
  );
}