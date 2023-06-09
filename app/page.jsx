import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover and Share{" "}
                <br/>
                <span className="blue_gradient">AI-Powered Artworks</span>
            </h1>
            <p className="desc text-center">
                Prompt Palette is a place to share your AI generated artwork with others, along with your creative prompts.
            </p>
            
            <Feed/>
        </section>
    )
}

export default Home