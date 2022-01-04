
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs/*, addDoc*/ } from 'firebase/firestore';

export interface FakeGitHubMiddlewareOptions {
    clientId: string;
    clientSecret: string;
}

const firebaseConfig = {
    apiKey: "AIzaSyDivZcmal9FLOGI3WfhN7OLvyvvnzCLK78",
    authDomain: "tereza-api-app.firebaseapp.com",
    projectId: "tereza-api-app",
    storageBucket: "tereza-api-app.appspot.com",
    messagingSenderId: "552538685765",
    appId: "1:552538685765:web:28897308ae92e6b80f3e2c",
    measurementId: "G-GYD9RVQVSP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const fakeGitHubMiddleware = () => {
    let fake = new FakeGitHub();
    /*return async (ctx, next) => {};*/
    fake.getUser();
};

class FakeGitHub {

    async getUser() {
        const citiesCol = collection(db, 'games-history');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        console.log(cityList);


        /*
        authorize(ctx: Koa.Context) {
          const req = ctx.query as {client_id?: string; scope?: string};
          if (req.client_id !== this._options.clientId) {
            ctx.status = 400;
            ctx.body = 'error: missing or incorrect client_id url parameter';
            return;
          }
      
          const scope = req.scope ?? '';
          const userId = this._getOrSetUserIdFromCookie(ctx);
          const code = `fake-code-${randomNumber()}`;
          this._temporaryCodes.set(code, {userId, scope});
      
          const authorizeUrl = `${this._options.redirectUrl}?code=${code}`;
          const cancelUrl = `${this._options.redirectUrl}?error=access_denied`;
          if (ctx.cookies.get('authorized')) {
            return ctx.redirect(authorizeUrl);
          }
      
          ctx.status = 200;
          ctx.type = 'text/html';
          ctx.body = `
            <h2>Fake GitHub authorization prompt</h2>
            <button onclick="cancel()">Cancel</button>
            <button style="background:green;color:white"
                    onclick="authorize()">Authorize lit</button>
            <script>
              function authorize() {
                document.cookie = 'authorized=1;path=/';
                location.assign("${authorizeUrl}");
              }
              function cancel() {
                location.assign("${cancelUrl}");
              }
            </script>
          `;
        }*/

        /*async getAvatarImage(ctx: Koa.Context) {
          const id = ctx.path.match(/^\/u\/(?<id>\d+)/)?.groups?.id;
          ctx.status = 200;
          ctx.type = 'image/svg+xml';
          const size = parseInt((ctx.query.s as string | undefined) ?? '245', 10);
          const widthHeight = `width="${size}" height="${size}"`;
          if (id && this._userDetails.has(Number(id))) {
            // Yellow smiley
            ctx.body = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 100 100" ${widthHeight}>
              <circle cx="50" cy="50" r="50" fill="#fd0" />
              <circle cx="30" cy="40" r="10" fill="#000" />
              <circle cx="70" cy="40" r="10" fill="#000" />
              <path d="M20,65 c15,15 45,15 60,0"
                    style="fill:none;stroke:#000;stroke-width:5" />
            </svg>
            `;
          } else {
            // Red cross
            ctx.body = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 100 100" ${widthHeight}>
              <path d="M5,5 L95,95 M5,95 L95,5"
                    style="fill:none;stroke:#f00;stroke-width:15" />
            </svg>
            `;
          }
        }*/

    }
}