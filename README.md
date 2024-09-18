**Flow of the Project:**</br> 
<img width="836" alt="Screenshot 2024-09-18 at 1 05 06 PM" src="https://github.com/user-attachments/assets/a9558e66-afc0-45e2-b178-6a48b2deb3ff">
</br>
</br>
</br>
</br>

**The Schema for the Project Looks like this :**
</br>
**Post is like the central Fact Table and the others are the Dimensions of that Fact Table: </br>
Post : {user, comment, category}**
</br>
</br>
<img width="936" alt="Screenshot 2024-09-18 at 1 04 25 PM" src="https://github.com/user-attachments/assets/cf1d0e4e-af81-4254-8fcd-0176cb2001f4">
</br>
</br>


</br>
</br>

**For CRUD (Create Read Update Delete) operations the App Router communicates via API that queries through prisma to the MongoDB Database.**
</br>
<img width="1124" alt="Screenshot 2024-09-18 at 1 04 44 PM" src="https://github.com/user-attachments/assets/35bf0264-cd1f-4254-bc64-0be2a033bdc3">

</br>
</br>
</br>
</br>

**Prisma Engine: basically a direct interface to database for the Prisma Client.**
![telegram-cloud-photo-size-5-6293796555769102641-y](https://github.com/user-attachments/assets/9413dcc9-4f4a-495d-9ab9-2929f60c1f54)

</br>
</br>

Bad Performance Case for Prisma:</br>
1. There are chances for a Bad/Trash performance as Prisma does not use joins internally. </br>
2. At low level, it fetches the data from both the tables and combines the result in it's Engine.</br>
3. So if we want to perform join on two last tables for a Database, then Prisma will simply perform fetch first that actually increases requests on PlanetScale (charges for queries) then the Engine may take additional time too.</br>
4. So if the cost is mainly based on memory allocation and execution time, Prisma increases the baseline memory requirement and can lead to cols starts (2 seconds).</br>
5. Joins are generally a very slow operation on large Databases, maybe that's why Prisma has that, but joins are a common practice and are used extensively due to their simplicity which seems to be a slowing factor for Prisma.</br>

</br>
</br>
</br>
</br>

**Why NextJS ?**

<img width="668" alt="Screenshot 2024-09-18 at 1 04 54 PM" src="https://github.com/user-attachments/assets/46193e58-f30d-4d7e-ac36-69c41b60dba8">
</br>
1. If a Search Engine Optimisation (SEO) is important, then we can perform Server Side Rendering (SSR) for certain pages.</br>
2. This provides a resource security from bots or token crashing ( as JWT is used in OAuth).</br>
3. If user interaction is desired, then Client Side Rendering (CSR) can be done for certain pages too.</br>

</br>
</br>
</br>
</br>




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
