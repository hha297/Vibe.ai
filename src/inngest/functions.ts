import { inngest } from './client';
import { Sandbox } from '@e2b/code-interpreter';
import { getSandbox } from './utils';
export const helloWorld = inngest.createFunction(
        { id: 'hello-world' },
        { event: 'test/hello.world' },
        async ({ event, step }) => {
                const sanboxId = await step.run('get-sandbox-id', async () => {
                        const sandbox = await Sandbox.create('vibe-nextjs-hha297');
                        return sandbox.sandboxId;
                });

                const sandboxUrl = await step.run('get-sandbox-url', async () => {
                        const sandbox = await getSandbox(sanboxId);
                        const host = sandbox.getHost(3000);
                        return `http://${host}`;
                });

                return { sanboxId, sandboxUrl };
        },
);
