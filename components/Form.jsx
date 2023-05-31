import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post </span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share amazing prompts with the world!
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7 mt-10 max-w-2xl glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI Prompt
                    </span>
                    <textarea
                        value={post.prompt}
                        onChange={(e) =>
                            setPost({ ...post, prompt: e.target.value })
                        }
                        placeholder="Write your Prompt here..."
                        required
                        className="form_textarea"
                    />
                </label>

                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Platform
                    </span>
                    <input
                        value={post.platform}
                        onChange={(e) =>
                            setPost({ ...post, platform: e.target.value })
                        }
                        placeholder="AI platform used"
                        required
                        className="form_input"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag{" "}
                        <span className="font-normal">
                            (#cyberpunk, #modern, #abstract)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) =>
                            setPost({ ...post, tag: e.target.value })
                        }
                        placeholder="#tag"
                        required
                        className="form_input"
                    />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-blue rounded-full text-white"
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;