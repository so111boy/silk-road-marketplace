import { useEffect, useState } from 'preact/hooks';

export function JupiterTerminal() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadJupiter = async () => {
      if (typeof window.Jupiter === 'undefined') {
        console.error('Jupiter is not defined on the window object');
        return;
      }

      try {
        await window.Jupiter.init({
          displayMode: "widget",
          endpoint: "https://mainnet.helius-rpc.com/?api-key=0cb012f2-8c3f-437d-8428-c41f8ae2c9e5",
          formProps: {
            fixedOutputMint: true,
            swapMode: "ExactIn",
            initialOutputMint: "FoQ4yi9FgpMocZ1syE4XGKEw3yAeDx9PK2TKn6SQpump",
          },
        });
        console.log('Jupiter Terminal initialized successfully');
        setIsLoaded(true);
      } catch (error) {
        console.error('Error initializing Jupiter Terminal:', error);
      }
    };

    loadJupiter();
  }, []);

  return isLoaded ? null : <div>Loading Jupiter Terminal...</div>;
}