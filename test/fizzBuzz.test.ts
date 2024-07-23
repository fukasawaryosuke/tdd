// プロダクトコード

//　最初のレッド
// class FizzBuzz {
//   public convert(number: number) {
//     return null;
//   }
// }

// 最短時間で成功させる
// 酷い茶番が大事
// テストコードのテストコード問題
// class FizzBuzz {
//   public convert(number: number) {
//     return "1";
//     // わざと判別可能な誤りを入れて、予想通りにテストが失敗することを確認する
//     // 欠陥挿入
//     // return '0';

//     // テストの書き方に一番不安があるタイミング & テストコードのテストをするのには一番コストが低いタイミング
//     // これが酷い茶番の目的
//     // 仮実装
//   }
// }

// class FizzBuzz {
//   public convert(number: number) {
//     return number.toString()
//   }
// }

// class FizzBuzz {
//   public convert(number: number) {
//     //　最短時間で成功させる
//     if (number === 3) {
//       return 'Fizz';
//     }
//     return number.toString();
//   }
// }

//三角測量を経由しなくてもいい
// class FizzBuzz {
//   public convert(number: number) {
//     //　最短時間で成功させる
//     if (number % 3 === 0) {
//       return 'Fizz';
//     }
//     return number.toString();
//   }
// }

class FizzBuzz {
  public convert(number: number) {
    //　最短時間で成功させる
    if (number % 3 === 0) {
      return 'Fizz';
    }
    if (number % 5 === 0) {
      return 'Buzz';
    }
    return number.toString();
  }
}

//　テストコード
// describe("FizzBuzz", () => {
//   expect(true).toEqual(false);
// });

describe("FizzBuzz", () => {
  const fizzBuzz = new FizzBuzz();

  // beforeEach(() => {});

  it("数を文字列に変換する", () => {
    // 準備
    // 実行
    // 検証
    // 後片付け
  });

  // 数を文字列に変換する？ふわっとしている
  // 具体的に何がどうなればいいの？抽象度を下げる

  it("1を渡すと文字列'1'を返す", () => {
    // まだ対象のプロダクトコードは存在していないが、作る前に使うことがTDDでは大事
    // 使いやすいコード > 作りやすいコード
    // 使いやすさは使ってみないと分からない
    // 後から判明することになる

    // const actual = fizzBuzz.convert(1);
    // expect(actual).toEqual("1");

    // 実行 & 検証
    expect(fizzBuzz.convert(1)).toEqual("1");
  });

  it("1を渡すと文字列'1'を返す", () => {
    // 実行 & 検証
    expect(fizzBuzz.convert(1)).toEqual("1");
  });

  it("2を渡すと文字列'2'を返す", () => {
    // 実行 & 検証
    expect(fizzBuzz.convert(2)).toEqual("2");
  });

  it("3を渡すと文字列'Fizz'を返す", () => {
    // 実行 & 検証
    expect(fizzBuzz.convert(3)).toEqual("Fizz");
  });

  it("5を渡すと文字列'Buzz'を返す", () => {
    // 実行 & 検証
    expect(fizzBuzz.convert(5)).toEqual("Buzz");
  });
});
