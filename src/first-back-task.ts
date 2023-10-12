class FirstBackTask {


    getResult(actions: string[]) {
            let successfulSessions = 0;
            let isSessionStarted = false;
            let isSessionConnected = false;
          
            for (let i = 0; i < actions.length; i++) {
              const action = actions[i];
          
              if (action === "start") {
                if (isSessionStarted) {
                  continue;
                }
                isSessionStarted = true;
              } else if (action === "connect") {
                if (!isSessionStarted || isSessionConnected) {
                  continue;
                }
                isSessionConnected = true;
              } else if (action === "message") {
                if (!isSessionStarted || !isSessionConnected) {
                  continue;
                }
                successfulSessions++;
              } else if (action === "end") {
                if (!isSessionStarted || !isSessionConnected) {
                  continue;
                }
                isSessionStarted = false;
                isSessionConnected = false;
              }
            }
          
            return successfulSessions;

    }
}


export default FirstBackTask