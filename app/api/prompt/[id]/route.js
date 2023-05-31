import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate("creator");
        if(!prompt) return new Response("Prompt not found",{status: 404});

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to load prompt", { status: 500 });
    }
};

export const PATCH = async (request, {params}) => {
    const {prompt, tag, platform} = await request.json();

    try {
        await connectToDB();

        const exisitingPrompt = await Prompt.findById(params.id);
        if(!exisitingPrompt) return new Response("Prompt not found",{status: 404});

        exisitingPrompt.prompt = prompt;
        exisitingPrompt.platform = platform;
        exisitingPrompt.tag = tag;

        await exisitingPrompt.save();
        return new Response(JSON.stringify(exisitingPrompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 });
    }
}

export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted",{status: 200});
    } catch (error) {
        return new Response("Failed to delete prompt", {status: 500});
    }
}