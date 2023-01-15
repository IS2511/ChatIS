import { useParams } from "solid-start";
import MySiteTitle from "~/components/MySiteTitle";

export default function Chat() {
    let params = useParams<{ channel: string }>();
    let channel = params.channel;

    return (
        <>
            <MySiteTitle>#{channel}</MySiteTitle>
            <main class="text-center mx-auto text-gray-700 p-4">
                {/* <h1 class="max-6-xs text-6xl text-slate-700 font-thin uppercase my-16">
                    Hello world!
                </h1> */}
                
            </main>
        </>
    );
}
