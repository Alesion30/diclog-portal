import { NextPage } from 'next'
import { Container } from '~/components/uiParts/Container'
import { DefaultLayout } from '~/components/layouts/default'

const PrivacyPolicyPage: NextPage = () => (
  <DefaultLayout>
    <div className="bg-yellow-50">
      <Container>
        <div className="md:px-20 pt-40 pb-20">
          <h1 className="text-3xl font-bold mb-10">
            Privacy Policy プライバシーポリシー
          </h1>
          <ul>
            <li>
              <strong>第１条（利用者情報の定義）</strong>
              <br />
              Diclogのプライバシーポリシー（以下「本ポリシー」といいます。）において、利用者情報とは、ユーザーに関する個人情報（個人情報保護法第２条第１項により定義された「個人情報」をいい、以下同様とします。）、ユーザーの入力情報、通信サービス上の行動履歴その他ユーザーの情報端末において生成又は蓄積された情報、及び提携パートナーによる提携サービスの提供に伴い取得したユーザーに関する情報であって、本ポリシーに基づき当研究室が収集するものを意味します。
            </li>
            <br />
            <li>
              <strong>第２条（本サービスで収集する利用者情報）</strong>
              <ol className="list-decimal pl-5">
                <li>
                  当研究室が提供するDiclog、関連ソフトウェア（以下「本アプリ」といいます。）をインストールすることによりユーザーが利用することができるサービス、及び本アプリと連動させて利用可能なChrome拡張機能（以下総称して「本サービス」といいます。）において、当研究室は、ユーザーから次の情報の全部又は一部を提供していただきます。
                  <br />
                  (1) 識別子（ユーザーIDなど）
                  <br />
                  (2) 表示名
                  <br />
                  (3) プロフィール画像
                  <br />
                  (4) メールアドレス
                  <br />
                  (5)
                  その他当研究室が定める登録フォームにてユーザーが入力する情報
                  <br />
                </li>
                <br />
                <li>
                  本サービス（提携パートナーによる提携サービスを含みます。以下、本条において同様とします。）の提供に際して、当研究室は、ユーザーのアクセス状況や本サービスの利用状況に関する情報を収集します。この情報には、以下の情報の全部又は一部が含まれます。
                  <br />
                  (1) 英単語等の検索履歴
                  <br />
                  (2) 各サービスのご利用履歴
                  <br />
                  (3) Googleアカウント情報 または Appleアカウント情報
                  ※ユーザーの意志により連携した場合のみ
                  <br />
                  {/* (4) クーポン、ポイント等のサービスに関する情報<br /> */}
                  (4) アンケート調査・モニター調査等に関する情報
                  <br />
                  (5)
                  その他申込み受付履歴、ご意見・ご要望・お問い合わせ等の内容等、本サービスの提供に付随して当研究室が取得した情報
                  <br />
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>第３条（利用者情報の利用目的）</strong>
              <br />
              <ol className="list-decimal pl-5">
                <li>
                  当研究室は、本サービスの利用を通じて取得したユーザーの利用者情報を、ユーザーご本人の同意なく利用目的の範囲を超えて利用することはありません。当研究室が取得した利用者情報は、以下の目的の範囲内で適正に取り扱います。
                  <br />
                  (1)
                  本サービスの提供（ユーザーが同意した場合、提携サービスの提供を含みます。）上必要なシステム運用のため
                  <br />
                  (2)
                  本サービス上でのプロフィールページの作成、プロフィールページを他の利用者の閲覧に供すること、及び他の利用者からの通知の送信等を可能とすること等の本サービスの提供のため
                  <br />
                  (3)
                  ユーザーに合わせた本サービス上の情報配信のカスタマイズのため
                  <br />
                  (4) 本サービスに関するご案内のため
                  <br />
                  (5) 本サービスの停止・中止・契約解除の通知のため
                  <br />
                  (6) 本サービスの利用規約に違反する行為への対応のため
                  <br />
                  (7)
                  本サービスに関する当研究室の規約、本ポリシー等の変更などの通知のため
                  <br />
                  (8) 紛争、訴訟などへの対応のため
                  <br />
                  (9) 本サービスに関するご案内、お問い合わせ等への対応のため
                  <br />
                  (10) 市場調査、分析、マーケティング及び調査研究のため
                  <br />
                  (11) 個人を識別できない形式に加工した統計データを作成するため
                  <br />
                  (12) 前各号に付随する本サービスの提供・維持・改善のため
                  <br />
                </li>
                <br />
                <li>
                  当研究室は、提携パートナー及び第三者コンテンツ提供会社その他の第三者との間で、個人情報を含む利用者情報を、前項の目的の達成のために必要な範囲内において、相互に提供することがあります。
                  (1)
                  第三者への提供の手段又は方法、書面又は電子的若しくは電磁的方法
                  (2)
                  第三者への提供の停止のご請求、当研究室は、ユーザーから第三者への提供の停止等のお申出があった場合、第三者への提供の停止等適切な措置を講じます。詳しくは、第13条第３項及び第14条をご確認ください。
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>第４条（利用者情報の利用目的の変更）</strong>
              <br />
              当研究室は、前条の利用目的を、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合には、当研究室が別途定める方法により、ユーザーに通知又は公表します。
            </li>
            <br />
            <li>
              <strong>第５条（利用者情報の取得）</strong>
              <br />
              <ol className="list-decimal pl-5">
                <li>
                  当研究室は、偽りその他不正の手段によらず、適正に利用者情報を取得します。
                </li>
                <li>
                  当研究室は、ユーザーが本サービスを利用することによる取得以外の方法で利用者情報を取得する場合には、その利用目的を事前に通知又は公表します。
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>第６条（安全管理）</strong>
              <br />
              <ol className="list-decimal pl-5">
                <li>
                  当研究室は、利用者情報の漏洩、滅失又は毀損の防止その他の利用者情報の安全管理のために必要かつ適切な措置を講じます。
                </li>
                <li>
                  当研究室は、利用者情報の取扱いの全部又は一部を第三者に委託する場合は、当該第三者との間で本ポリシーに準じる内容の秘密保持契約等をあらかじめ締結するとともに、当該第三者において利用者情報の安全管理が図られるよう、必要かつ適切な監督を行います。
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>第７条（メールアドレスの取扱い）</strong>
              <br />
              <ol className="list-decimal pl-5">
                <li>
                  当研究室は、本サービスの利用を通じて取得したユーザーのメールアドレスについて、紛失、盗難、破壊、改ざん、漏洩、外部からの不正なアクセスを未然に防ぐために、個人情報に関する法令及びその他の規範を遵守し、その保護に万全を尽くします。
                </li>
                <li>
                  当研究室では、ユーザーのメールアドレスの保護の為、研究室の中で限られた権限者以外は、ユーザーのメールアドレスにアクセスできない措置をとります。
                </li>
                <li>
                  当研究室は、「重要なお知らせ」など、当研究室からユーザーへの連絡が必要な通知に関しては、全てのユーザーにお送りしています。
                </li>
              </ol>
            </li>
            <br />
            {/* <li>
            <strong>第８条（IDFAその他の技術の利用）</strong>
            <ol className="list-decimal pl-5">
              <li>
                当研究室は、本サービスの提供に際し、「Identification for
                Advertisers」（以下「IDFA」といいます。）、「AdvertisingID」及び「Cookie（クッキー）」と呼ばれる技術及びこれに類する技術を使用します。
              </li>
              <li>
                IDFA
                とは、Apple社の発行する広告用のIDであって、ターゲティング広告を行う際にユーザーの携帯端末を識別するための符号です。IDFA
                は、ユーザーの携帯端末を識別することはできますが、ユーザー個人を識別することはできません。iOS
                6以上のOSを搭載した携帯端末については、IDFAを使用したターゲティング広告を制限することができますが、その結果本サービスの全部又は一部が利用できなくなることがあります（詳細については、Apple社の利用規約又はプライバシーポリシーをご参照ください。）。
              </li>
              <li>
                AdvertisingIDとは、Google社の発行する広告用のIDであって、ターゲティング広告を行う際にユーザーの携帯端末を識別するための符号です。AdvertisingIDは、ユーザーの携帯端末を識別することはできますが、ユーザー個人を識別することはできません。なお、設定によりAdvertisingID機能を無効にすることはできますが、その結果本サービスの全部又は一部が利用できなくなることがあります（詳細については、Google社のウェブサイト等をご参照ください。）。
              </li>
              <li>
                Cookieとは、ウェブサーバがユーザーのコンピュータを識別する業界標準の技術です。Cookieは、ユーザーのコンピュータを識別することはできますが、ユーザー個人を識別することはできません。なお、ブラウザによっては、その設定を変更してCookieの機能を無効にすることはできますが、その結果ウェブページ上のサービスの全部又は一部が利用できなくなることがあります。
              </li>
            </ol>
          </li> */}
            {/* <br /> */}
            {/* <li>
            <strong>第９条（情報収集モジュール）</strong>
            <br />
            本サービスには、利用者情報を解析するため、以下の情報収集モジュールが組み込まれています。これに伴い、当研究室は、以下の情報収集モジュール提供者への利用者情報の提供を行います。これら情報収集モジュールは、Cookie等を利用し、個人を特定する情報を含むことなく、利用者情報を収集し、収集された情報は第２号記載の情報収集モジュール提供者のプライバシーポリシーその他の規定に基づき管理されます（詳細については、各情報収集モジュール提供者のプライバシーポリシー等をご参照ください。）。
            <ol className="list-decimal pl-5">
              <li>
                情報収集モジュールの名称
                <br />
                ①Google Analytics ②Apteligent ③Flurry ④PartyTrack ⑤Facebook SDK
                ⑥Crashlytics
              </li>
              <li>
                情報収集モジュールの提供者
                <br />
                ①Google, Inc. ②Apteligent, Inc. ③Flurry Inc.
                ④アドウェイズ株式会社 ⑤Facebook, Inc. ⑥Crashlytics, Inc
              </li>
            </ol>
          </li> */}
            {/* <br /> */}
            {/* <li>
            <strong>第10条（外部サービス等）</strong>
            <ol className="list-decimal pl-5">
              <li>
                当アプリは、LINE、Facebook等の外部サービス（以下「外部サービス」といいます。）と連携してサービスを提供する場合があります。ユーザーがその希望により外部サービスと連携した本サービスを利用する場合、当研究室は、当該外部サービス提供者への利用者情報の提供を行うことがあります。
              </li>
              <li>
                iOS9以上を搭載した情報端末により本アプリを利用する場合、ユーザーはSpotlight検索を利用して本アプリ内に保存された位置情報及び時間情報の検索を行うことが可能です。当研究室は、Apple社の利用規約等に従い本機能を提供します。Spotlightの利用にあたり収集された利用者情報は、その使用した端末内でのみ蓄積され、Apple社その他の第三者に共有されることはありません。ただし、Apple社の利用規約その他Spotlightの使用条件等が変更された場合、当研究室は、Spotlightの利用に必要な範囲でユーザーの情報をApple社その他の第三者に利用者情報の提供を行うことがあり、ユーザーは予めこれに同意するものとします。なお、設定によりSpotlight検索のインデックス作成を停止させること及び本アプリにおける検索を無効化することができますが、その結果、利用できる検索機能の一部が制限されることがあります。
              </li>
            </ol>
          </li> */}
            {/* <br /> */}
            <li>
              <strong>第8条（利用者情報の開示・共有）</strong>
              <br />
              当研究室は、利用者情報のうち、個人情報については、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、ユーザーの承諾がない限り、第三者に開示又は共有することはありません。ただし、以下の場合は例外とします。
              <ul>
                <li>
                  当研究室が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を第三者に委託する場合
                </li>
                <li>
                  前二条の定めに従って、情報収集モジュール提供者又は外部サービス提供者へ個人情報が提供される場合
                </li>
                <li>
                  法令に基づき、裁判所、警察等の公的機関に開示を求められた場合
                </li>
              </ul>
            </li>
            <br />
            {/* <li>
            <strong>第12条 （コンテキストアウェア通知）</strong>
            <ol className="list-decimal pl-5">
              <li>
                当研究室は、当研究室が、利用者情報をもとにユーザーのニーズないし興味、関心に合わせて情報を配信する手法（以下「コンテキストアウェア通知」といいます。）の実験のため、本サービス又は提携サービスの提供に際し、ユーザーの位置情報、行動履歴、アカウント等の情報等（以下「位置情報等」といいます。）を、以下の目的で収集、蓄積又は利用します。
                <br />
                (1) ユーザーのサービスの利便性の向上のため (2)
                ユーザーに適した情報の配信のため (3)
                統計データとして活用するため
              </li>
              <li>
                当研究室は、提携企業等に対し、次項に定める目的のために必要な範囲内で、ユーザーの位置情報等の情報又はこれらの情報等を解析した結果に関する統計資料を、ユーザーを特定できない形式で提供することがあります。
              </li>
            </ol>
            </li> */}
            {/* <br /> */}
            <li>
              <strong>第9条（利用者情報の開示・訂正等）</strong>
              <ol className="list-decimal pl-5">
                {/* <li>
                ユーザーから提供された個人情報について、ユーザーが書面による開示、訂正、追加、削除を要望する場合は、本人確認（代理人による申請の場合、適正な代理人であることの確認）のために必要な書類を同封のうえ、郵送によりご請求ください。システム開発委託会社への依頼料として、１回の申請ごとに、手数料として２１６０円（税込み）をご負担頂きます。
              </li> */}
                <li>
                  当研究室は、ユーザーから前項の方式による個人情報の開示等のお申出があり、本人確認ができた場合、合理的な範囲で開示等をいたします。ただし、個人情報保護法その他の法令により、当研究室が開示等の義務を負わない場合はこの限りではありません。
                </li>
                <li>
                  当研究室は、ユーザーから、ユーザーの個人情報があらかじめ公表された利用目的の範囲を超えて取り扱われているという理由、又は偽りその他不正の手段により取得されたものであるという理由により、個人情報保護法の定めに基づきその利用停止又は消去（以下「利用停止等」といいます。）を求められた場合において、その請求に理由があることが判明したとき、及び第３条第２項に基づく第三者提供の停止を求められたときは、ご本人からの請求であることを確認の上で、遅滞なく個人情報の利用停止等を行い、その旨をご本人に通知します。ただし、個人情報保護法その他の法令により、当研究室が利用停止等の義務を負わない場合はこの限りではありません。
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>第10条 （お問い合わせ）</strong>
              <br />
              当研究室の利用者情報の取扱いに関するご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関する事項は、下記までお問い合わせください。
              <br />
              <div>
                九州大学システム情報科学研究院ヒューマノフィリックシステム研究室
                <br />
                E-mail:&nbsp;
                <a className="underline" href="mailto:staff@arakawa-lab.com">
                  staff@arakawa-lab.com
                </a>
                <br />
                （ご回答にお時間をいただく場合もございますのでご了承ください。）
              </div>
            </li>
            <br />
            <li>
              <strong>第11条（免責）</strong>
              <br />
              次に掲げる場合には、当研究室は一切の責任を負いません。
              <ol className="list-decimal pl-5">
                <li>
                  ユーザーご本人が本サービスの機能又は別の手段を用いて第三者に利用者情報を明らかにした場合
                </li>
                <li>
                  ユーザーが自ら本サービス上に入力した情報等により、個人を識別しうる状態に至った場合
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>第12条（本ポリシーの変更）</strong>
              <br />
              当研究室は、利用者情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーをユーザーの事前の了承を得ることなく変更することがあります。変更後の本ポリシーについては、当研究室が別途定める場合を除いて、当研究室ウェブサイトでの公示後、すぐに効力が発生するものとします。但し、法令上ユーザーの同意が必要となるような内容の変更を行うときは、当研究室が定める方法でユーザーの同意を取得します。
            </li>
            <br />
            <li>
              <strong>第13条（その他の注意事項）</strong>
              <br />
              当研究室が提供するサービスは、当研究室が管理するサービス以外のサービスへのリンクを含む場合があり、これら外部サービスにおける内容や利用者情報の保護については、当研究室は一切責任を負いません。
            </li>
            <br />
          </ul>
        </div>
      </Container>
    </div>
  </DefaultLayout>
)

export default PrivacyPolicyPage
