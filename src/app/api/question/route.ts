export async function GET(req: Request, res: Response) {
  return Response.json(
    {
      question: "好きな食べ物はハムカツですか？",
      choices: ["はい", "いいえ", "部分的にそう", "エビカツです"],
    },
    { status: 200 }
  );
}
