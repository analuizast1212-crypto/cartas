export default function Home() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-3xl">

          {/* Detalhes decorativos */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-rose-200/40 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl" />

          {/* Carta */}
          <div className="relative rounded-3xl border border-white bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:p-12">

            {/* Pequeno detalhe */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-200" />
              <span className="text-rose-400 text-xl">♡</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-200" />
            </div>

            {/* Título */}
            <h1 className="mb-6 text-center font-serif text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">
              Querido Isaac, meu amor.
            </h1>

            {/* Texto */}
            <div className="mx-auto max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              <p>
                Você me disse que não queria perder meus textos e, desde então,
                eu decidi criar um site para que você possa ler minhas palavras
                sempre que quiser.
              </p>

              <p className="mt-5 font-medium text-slate-700">
                Espero que goste! ♡
              </p>
            </div>

            {/* Assinatura */}
            <div className="mt-10 text-center">
              <span className="text-xs tracking-[0.25em] uppercase text-slate-400 sm:text-sm">
                Com amor
              </span>
              <p className="mt-2 text-lg font-serif italic text-rose-500 sm:text-xl">
                Ana Luiza Souza
              </p>
            </div>

            {/* Rodapé decorativo */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-200" />
              <span className="text-rose-300">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-200" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
      CARTAS / TEXTOS
      ========================= */}
      <section className="relative overflow-hidden bg-[#faf8f8] px-4 py-16 sm:px-6 md:px-8 lg:px-10">
        <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[45%] h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-12 text-center sm:mb-14">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-rose-400 sm:text-xs">
              nossas palavras
            </span>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-slate-800 sm:text-3xl md:text-4xl">
              Tudo aquilo que eu queria te dizer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
              Cada texto guarda um pedacinho de nós, de tudo o que sentimos, vivemos e ainda queremos viver.
            </p>
            <div className="mx-auto mt-6 flex max-w-xs items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-200" />
              <span className="text-rose-400">♡</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-200" />
            </div>
          </div>

          <div className="space-y-8">
            <p
              className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
            >querido amor,

              hoje você me perguntou o porquê de eu te amar… e eu disse que mais tarde te contaria alguns dos motivos. e bom… cá estamos nós.

              mas a verdade é que me faltam palavras para explicar algo que, sinceramente, eu nunca consegui colocar em palavras. porque eu poderia passar horas escrevendo e, mesmo assim, ainda pareceria pouco diante do tamanho do que eu sinto por você.

              eu poderia dizer que te amo pelo jeito que você cuida de mim, me apoia, me protege e faz questão de me mostrar, nos pequenos detalhes, o quanto eu sou importante para você.
              poderia dizer que te amo pelo simples fato de você querer me ligar só para ouvir minha respiração enquanto eu dormia… ou por tocar para mim exatamente às 23h59 porque eu tinha dito que queria te ouvir, e você fez questão de cumprir sua palavra.
              são detalhes tão pequenos para quem vê de fora… mas, para mim, significam o mundo.

              e sim… eu achei muito engraçado quando você disse que eu nunca nem tinha te beijado para sentir tudo isso. mas é exatamente esse o ponto… eu nunca precisei do seu beijo ou do seu toque para te admirar, para escolher ficar ou para me apaixonar por você. porque eu não permaneci por causa de um beijo… eu permaneci por causa da sua essência. permaneci por causa da sua companhia, da paz que você me transmite, do seu jeito, da forma como você me olha, me respeita, me acolhe e me faz sentir segura.

              e, sinceramente… acho que foi aí que eu percebi que era amor. porque, apesar de nos conhecermos há apenas um mês, você conseguiu me dar uma certeza que ninguém nunca conseguiu me dar em tão pouco tempo: a de que é com você que eu quero construir uma vida.
              é com você que eu quero sonhar.
              é com você que eu quero crescer.
              é com você que eu quero dividir os meus dias.

              quero ser sua mulher… e quero que você seja o meu homem.
              quero morar em Belo Horizonte, se esse for o nosso caminho. quero conhecer a Disney com você, a Suíça, a Itália… ou qualquer outro lugar. porque, no fim das contas, eu percebi que nunca foi sobre o destino.
              é sobre quem segura a minha mão durante o caminho. porque, se for você… qualquer lugar vira lar.
              e se não for você… nenhum lugar faz sentido.

              e Isaac, você trouxe cor para a minha vida de um jeito que eu nem sabia que era possível.
              você fez nascer em mim uma vontade que eu achei que nunca mais sentiria: a vontade de viver um relacionamento sério, leve, verdadeiro e assumido novamente.

              depois de tudo o que vivi, eu tinha criado tantos medos… tantas barreiras… que, por muito tempo, achei que nunca mais conseguiria confiar assim em alguém.

              mas você chegou… e sem pressa, sem cobranças, sem precisar forçar absolutamente nada, você simplesmente ficou e escolheu estar..

              escolheu me conquistar todos os dias. e sem perceber, foi fazendo cada pedacinho do meu coração encontrar paz.

              você me faz sentir cuidada.
              você me faz sentir protegida.
              você me faz sentir escolhida.
              e eu nem sei explicar o quanto isso significa para mim.

              eu diria até que amo sentir ciúmes de você… e eu sei que parece meio louco escrever isso, mas é verdade.
              não porque eu queira te prender, mas porque eu amo tanto o homem que você é que, às vezes, bate aquele egoísmo de querer guardar tudo isso só para mim.

              e quando eu fico chateada com alguma coisa, muitas vezes não é nem pelo presente… é porque eu me pego pensando onde nós estávamos esse tempo todo para não termos vivido tudo isso antes.

              eu amo você.
              amo te ver.
              amo ouvir sua voz.
              amo quando você sorri.
              amo quando você segura minha mão.
              amo simplesmente existir ao seu lado.

              “E quanto mais o tempo passa, mais aumenta a graça em te viver…” e nunca uma frase fez tanto sentido, porq quanto mais eu conheço você, mais eu tenho vontade de conhecer.
              quanto mais eu vivo você, mais eu quero viver.

              e quando diz: “Me encaixo no seu cheiro e ali me deixo inteiro…”, eu sinto exatamente isso… e quando deitei no seu ombro e senti o seu cheiro… meu coração simplesmente desacelerou. foi como se, por alguns segundos, o mundo inteiro deixasse de existir.

              era só eu e você, e aqueles olhares..
              e se nós não estivéssemos em um culto, eu tenho certeza de que eu não teria beijado apenas o seu rosto…

              desde o momento em que você escolheu sentar ao meu lado… até quando você me abraçou duas vezes simplesmente porque queria me tocar… eu só conseguia pensar no quanto eu queria congelar aquele momento.

              porque, pela primeira vez em muito tempo, eu me senti exatamente onde eu queria estar.

              Ao seu lado, e eu quero continuar estando…

              quero ser a mulher que vai caminhar com você em todas as fases da vida.
              quero ser quem vai comemorar as suas conquistas, segurar sua mão nos dias difíceis, orar com você, rir das coisas mais bobas e te abraçar até tudo ficar bem.

              quero ser a mulher que você vai esperar no altar.

              quero, se Deus permitir e esse também for o nosso desejo, ser a mãe dos seus filhos.
              quero construir um lar com você.
              quero que, depois de um dia cansativo de trabalho, seja no meu abraço que você encontre descanso.

              quero ser o seu lugar seguro…
              assim como, sem perceber, você já se tornou o meu.

              então sim, eu te amo e esses são apenas alguns dos motivos.
              porque o restante… eu espero ter uma vida inteira para te mostrar.

              Todos os dias, em cada escolha, em cada abraço, em cada oração e em cada “eu te amo” que ainda vamos viver juntos…</p>

            <div className="space-y-8">
              <p
                className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
              >muito obrigada pelo apoio.. e saiba que eu também te amo demais..
                eu gostei tanto de poder te olhar, te tocar e sentir seu corpo junto ao meu..
                obrigada pelas dedicações e sim, Isaac, eu deixo você cuidar de mim..
                eu fico feliz por isso e posso dizer o mesmo.. estou aqui por ti, por mim e por nós.., e hoje queria ter acordado com sua voz..
                obrigada amor e é você que faz tudo ser extraordinário.. eu te amo.
                lar é exatamente estar com você a qualquer lugar/hora..
                eu amo essa música e obrigada por me enxergar exatamente assim..
                eu agradeço e você também é uma prova viva e única disso..
                então não saia desse labirinto por nd..
                eu fico muito feliz por ter te proporcionado tudo isso e trazer tantas coisas boas em sua vida.. a intenção era justamente essa, e sim, “você me trouxe um caminhão de coisas boas, é minha sorte disfarçada de pessoa”.. e eu amo amar você.
                saber que sou sua melhor decisão/escolha é um dos meus melhores motivos para sorrir, e saiba que você também tem sido minha melhor escolha..
                amo viver esse sonho ao seu lado, amor.. e obrigada por tudo isso..
                eu amo ser amada por você e amo amar-te.❤️</p>

            </div>

            <div className="space-y-8">
              <p
                className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
              >•até onde você está disposta a ir comigo?
                anjo, eu to disposta a ir a qualquer ponto com você, desde que seja um relacionamento que nos faça bem, que a gente se escolha e se respeite/priorize..

                •quais os limites?
                depende ao que se refere..

                •quando você pensa em se casar?
                eu não tenho pressa para isso, mas eu quero ter uma estabilidade espiritual/financeira/emocional/profissional para começar uma vida matrimonial de fato..

                •você sairia de casa para morar apenas em um casamento?
                não..

                •importa para você a família da outra parte(opinião deles?...)
                sim e muito..

                •você realmente acha/tem certeza de que sou a pessoa?
                sim, e a única coisa/pessoa que me mostraria o contrário, é você mesmo..

                •o que te faria desistir de mim/nós?
                não me referindo a sua pessoa, mas motivos que eu desistiria de uma relação, eu diria que traição, abusos, desrespeito, julgo desigual e acho que são os principais..
                •como você sabe diferenciar se é a emoção/calor do momento/novidade o que tem vivido comigo de algo certo/verdadeiro/certeiro/certeza para sua vida?
                porq a emoção passa, mas a escolha de permanecer não, e o que me faz ter certeza é que, mesmo conhecendo seus defeitos, seus medos e os dias difíceis, eu continuo querendo estar ao seu lado. e quanto mais eu conheço você, mais tenho certeza de que é você quem eu quero para a minha vida.

                •você realmente acha/sabe/acredita que dará certo, eu e você?
                acredito que sim..

                •você ficaria apesar de família?
                depende, porque apesar de sua família gostar ou não de mim, eu quero ter um bom relacionamento com eles e não quero que isso me/nós faça mal.. então eu ficaria até quando fosse algo saudável para minha pessoa/saude..

                •se sua família não me apoiasse, você ainda sim ficaria comigo?
                sim.. apesar de querer muito que te apoiem

                •você realmente está disposta/o quanto está disposta?
                estou disposta sim, e acho que você sabe..

                •você me esperaria até quando?
                até quando me desse a certeza que sou eu quem você quer e ficará..

                •realmente se sim, até que a morte nos separe?
                sim, até que a morte nos separe</p>
            </div>

            <div className="space-y-8">
              <p
                className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
              >bom, hoje vivemos tantas coisas e tantos momentos pesados.. mas quero começar essa mensagem com carinho e dizendo que eu amei estar com você em cada lugar, em cada abraço, em cada beijo, em cada colo e até mesmo no nosso choro naquela rua escura e vazia.. porque, apesar de toda dor, você continuou sendo o lugar onde eu mais quis estar.

                eu vi o que você me mandou no insta e, desde quando vim embora, eu já estava querendo mesmo parar de seguir e até mesmo cortar o pouco contato que já existia.. e não, eu não estou fazendo isso apenas para que você se sinta bem ou para não te colocar em alguma posição desconfortável.. estou fazendo porque isso também é importante para mim. eu quero cuidar do nosso relacionamento e, principalmente, cuidar de você.. e depois de tudo, fazer algo pelo seu bem-estar é o mínimo que eu poderia oferecer.

                amor, obrigada por me dar uma chance.. eu juro que não quero desperdiçá-la por nada nesse mundo. eu só quero ter você e ser sua, independente de qualquer coisa. eu escolho você hoje e quero continuar te escolhendo todos os dias, mesmo quando for difícil, mesmo quando houver medo, mesmo quando as circunstâncias parecerem maiores do que nós.

                eu realmente fiquei muito mal por reviver a mesma situação em menos de 24 horas.. não vou negar que isso me abalou muito. por alguns instantes eu senti meu coração apertar como se tudo fosse desmoronar outra vez.. mas, ao mesmo tempo, em nenhum momento eu deixei de querer construir e recomeçar com você. porque, se existe alguém por quem vale a pena enfrentar os dias difíceis, esse alguém é você.

                e eu sou muito feliz por partilhar a vida com você.. por ter o privilégio de amar e ser amada por você, isaac vinícius. é maravilhoso acordar ouvindo sua voz, receber seu carinho, ouvir suas risadas, sentir seus abraços e simplesmente dividir a vida contigo. se você ao menos imaginasse o bem que isso me faz, o quanto acalma meu coração e o quanto me faz sentir em casa…

                eu realmente te amo, te admiro, te respeito e te honro.. e, se fosse necessário, eu morreria por você. mas dizer isso é muito fácil.. então eu prefiro dizer que viveria por você. viveria todos os dias tentando me tornar uma pessoa melhor, amadurecendo, aprendendo, corrigindo meus erros e fazendo de tudo para ser a mulher que você merece ter ao lado. porque o amor, para mim, não está apenas em grandes declarações.. ele está nas pequenas escolhas diárias, na renúncia, no cuidado, na paciência, na lealdade e na decisão de permanecer.

                eu sei que ainda temos muito para construir.. e quero que você saiba que eu não quero apenas viver momentos bons ao seu lado. eu quero estar com você nos dias leves e também nos dias difíceis, quando a gente sorrir até a barriga doer e quando a gente precisar apenas sentar em silêncio e segurar a mão um do outro. porque amar você nunca foi sobre perfeição.. sempre foi sobre permanência.

                e, caso em algum momento você tenha esquecido, eu faço questão de te lembrar…

                “eu amei e amo te ver.”
                “deixa eu cuidar de você.”
                “seja para mim o que você quiser, contanto que seja o meu amor.”
                “só o amor constrói pontes indestrutíveis.”
                “fico sozinha pensando em você.”
                “enquanto houver razões, eu não vou desistir.. e, se for pra chorar, quero chorar por ti.”

                e, acima de tudo, quero que você nunca esqueça de uma coisa: eu continuo aqui. por você, por mim e por nós. continuo acreditando naquilo que estamos construindo, continuo acreditando no nosso amor e continuo escolhendo segurar a sua mão. porque, no fim de tudo, ainda é ao seu lado que eu quero estar, é com você que eu quero viver as minhas manhãs, os meus dias e todos os “boa noite” que a vida ainda nos permitir.

                eu te amo.. e espero passar o restante da minha vida encontrando novas formas de demonstrar isso.</p>
            </div>

            {/* CARD COM 3 FOTOS */}
            <section className="relative overflow-hidden bg-[#faf8f8] px-5 py-16 md:px-8">
              {/* Detalhes decorativos */}
              <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-100/30 blur-3xl" />

              <div className="relative mx-auto max-w-6xl">
                {/* Título */}
                <div className="mb-10 text-center">
                  <div className="mb-4 flex items-center justify-center gap-4">
                    <span className="h-px w-16 bg-rose-200" />
                    <span className="text-xl text-rose-300">♡</span>
                    <span className="h-px w-16 bg-rose-200" />
                  </div>

                  <h2 className="font-serif text-3xl italic text-slate-700 md:text-4xl">
                    Alguns dos nossos momentos
                  </h2>

                  <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                    Porque existem momentos que merecem ser guardados para sempre.
                  </p>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm md:p-8">

                  {/* Coração decorativo superior */}
                  <div className="mb-6 flex items-center justify-center gap-4">
                    <span className="h-px flex-1 bg-rose-100" />
                    <span className="text-2xl text-rose-300">♡</span>
                    <span className="h-px flex-1 bg-rose-100" />
                  </div>

                  {/* Fotos */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">

                    {/* FOTO 1 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/foto1.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Detalhe */}
                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>

                    {/* FOTO 2 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/foto2.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>

                    {/* FOTO 3 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/foto3.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>

                  </div>

                  {/* Rodapé do card */}
                  <div className="mt-7 flex items-center justify-center gap-4">
                    <span className="h-px w-20 bg-rose-100" />
                    <span className="font-serif text-sm italic text-rose-300">
                      nós dois, sempre
                    </span>
                    <span className="h-px w-20 bg-rose-100" />
                  </div>
                </div>
              </div>
            </section>


            <div className="space-y-8">
              <p
                className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
              >uau amor… eu acho que esse é um dos meus textos favoritos..
                eu amei demais, de coração..
                e sim, é incrível dividir a vida com meu verdadeiro, eterno, perfeito e último amor, Isaac..
                “As estrelas também estavam lindas ontem, e hoje elas brilham ainda mais..”❤️</p>
            </div>

            <div className="space-y-8">
              <p
                className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
              >obrigada amor por dizer e nos permitir conversar sobre..
                eu sei que a questão de insta te incomoda e sempre quis te deixar bem quanto à isso.. e realmente te entendo, porque penso igual.
                sei sim e obrigada por confiar e nos permitir isso..
                sei amor, mas não é porq ele é meu que a gente não possa “mudar” certas coisas.., eu vi que colocou e eu também gostei muito, de coração.. eu sei que posso neném, e realmente gostei tanto com seu @ ou só com aliança em si..
                entendo, de verdade.. pode/deve dizer amor.. obrigada por dizer mesmo sabendo que não queria muito..
                sei sim e agradeço por isso.., somos nossos, eu e você, você e eu sempre..
                você também é minha prioridade neném.</p>

            </div>

            <div className="space-y-8">
              <p
                className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
              >bom diaa meu amor
                como você está? dormiu bem? descansou? tomou aguinha/café com leite?
                espero que tenha conseguido descansar e acalmar sua mente, que tenha encontrado bons motivos para sorrir entre tudo o que se passa em sua mente..
                queria lembrar à você o quanto te amo, o quanto te admiro, o quanto me inspiro, o quanto feliz sou por tê-lo ao meu lado/ser sua, o quão bem você me faz, a pessoa extraordinária que o Isaac Vinícius é..
                queria logo cedo te lembrar que não irei embora, que não irá me perder, e que não desistirei de nós, por NADA.
                e sim, dedico a você e exclusivamente a sua pessoa, meu amor, Rute 1:16-17 que diz: "Não insistas comigo que te deixe e que não mais te acompanhe. Aonde fores irei,
                onde ficares ficarei!
                O teu povo será o meu povo e o teu Deus será o meu Deus!
                Onde morreres morrerei, e ali serei sepultada.
                Que o Senhor me castigue
                com todo o rigor se outra coisa que não a morte me separar de ti!“
                sabe, a gente conversou tanto ontem e vc disse que se pudesse, me privaria de qualquer dor para que eu não passasse por tal, e o meu desejo/vontade é exatamente a mesma.. te privar de qualquer incômodo/pensamento/sentimento que não te fazem bem.. eu preferia sentir/pensar em seu lugar só para ter a certeza que estaria bem, que estaria saudável e feliz neném..
                eu te amo tanto que suportaria o insuportável por ti, morreria e viveria pela sua pessoa.. e ainda acho isso muito pouco comparado a tudo oq vc faz por/para mim/nós..
                obrigada amor, obrigada por me amar como Cristo amou a igreja, por me amar igual ele ama e por se dedicar em tudo oq faz.. é surreal e admiro tanto isso..
                e eu te desejo de coração, que seu dia seja incrível, que tudo o que fizer dê certo e prospere, que você venha contemplar tamanha bondade, alegria, amor, paz, graça e o cuidado de Deus..
                eu sei que você sabe, mas só queria te lembrar que você tem um pai que cuida de você, que zela pela sua vida e acompanha todos os seus passos.. que te ama e cuida nos mínimos detalhes, que se faz presente e que apesar/além de ele te escolheu e não desiste de você e na sua fraqueza, ele te fortalece…
                e neném, eu desejo e sei que nos dias bons você encontra a alegria de Deus, mas nos dias maus, saiba que a alegria de Deus te encontra.. e a sua graça nos basta..
                eu te amo meu amor, meu homem, meu lindo, meu príncipe, meu último e genuíno amor.❤️</p>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >A uns dias você me perguntou oq eu estava achando sobre nossa relação, eu disse que escreveria à respeito e bom, nada melhor para falar sobre hoje, nosso dia 16..

                  ha dois meses eu recebi uma mensagem durante a tarde sobre um código que sim, estava organizando mas era a coisa mais simples possível.. e me lembro como se fosse ontem, o sorriso genuíno que apareceu em meu rosto de ler aquilo.. e partir dali, tudo aconteceu, tudo se encontrou e se encaixou..
                  você costuma dizer que eu cheguei em sua vida e coloquei tudo em lugar deixando organizado e colorido, mas amor, eu posso dizer que quem fez isso foi exatamente você..
                  organizando toda a confusão que havia em mim, deixando cada coisa em seu devido lugar e deixando minha vida com mais cor e harmônica.. e sou extremamente feliz e grata por isso..
                  e se você soubesse o quanto eu precisava que você chegasse não acreditaria.., você é a resposta mais linda das minhas orações.., você é meu melhor amigo/companheiro/confidente/ exemplo/ apoio e o melhor amor que eu nem poderia imaginar existir..
                  obrigada por me amar como Cristo nos ama, obrigada por me dar 1001 motivos para sorrir, obrigada por estar e ser presente, obrigada por ouvir e me escutar, obrigada por tocar pra mim 23:59 apenas para não virar o dia sem eu ouvi-lo.., obrigada por cada cuidado que tem com a minha vida, por cada água levada, cada horário dito, cada remédio oferecido, cada abraço que virou lar após um dia cansativo, por cada colo que virou abrigo e pela pessoa incrível que você é para/por mim/nós..
                  uma vez eu li que nos olhos certos, nos tornamos poesia.. e hoje eu vivo esse belo trecho e amo ser sua poesia e te fazer a minha.. eu te amo neném, eu te vivo e te admiro mais que tudo e sim, sou sua fã n° 1..
                  “você me deu a mão, e isso fez meu dia ser especial”, “mas te vejo e sinto o brilho desse olhar, que me acalma e me trás força pra encarar TUDO” e amo que Isaac Vinícius proporciona isso..
                  “Se você me pedir pra ficar pra sempre com você, nem vou pensar duas vezes pra te responder, ce sabe que eu vou, pego minhas coisas e eu vou..”
                  e irei para qualquer lugar com você, porque tendo a sua companhia qualquer lugar se torna casa, se torna lar, se torna seguro e é só disso que eu preciso, você.
                  então sim meu amor, desde o dia 16/06/2026 até 16/08/2026 eu estou amando meus dias, apesar/alem de, porque tendo você tudo é suportável, a gente recomeça, se reconstrói e se reconquista todos os dias..
                  as dificuldades ao seu lado se tornam leves e fácies de se solucionar, os dias ruins se tornam bons ao ouvir sua voz e ver o seu lindo sorriso, o cansaço da rotina passa quando recebo “quero te ver, posso?”, e todo amor se multiplica ao passar dos dias..
                  então sim, o infinito é pequeno comparado ao quanto te amo e ao quanto te quero.., se torna pequeno comparado a vontade que eu tenho de cuidar/amar/zelar pela sua vida e dia após dia eu quero e irei aprender a melhor maneira para amá-lo e passar a segurança que necessita com maior carinho e dedicação..
                  obrigada por ser meu homem e me fazer sua mulher..
                  saiba que sempre será você, em qualquer vida e em qualquer lugar..
                  eu te amo neném, amo ser amada por ti, amo que nos tenhamos como nunca, e amo ter a certeza que continuará sendo assim, eu por você e você por mim.
                  “te amo e te vivo.”
                  feliz dia 16❤️</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >eu não me entendo neném, pq ao mesmo tempo que me sinto segura eu me sinto insegura.., ao mesmo tempo que tenho certeza que estaremos juntos, eu temo que vá embora a qualquer momento.., e sim, tem cvs que me dão esse gatilho tipo hoje.. porq eu nunca falei sobre não estar com alguém não querendo ir embora e apenas sendo “realista”.., então quando eu disse que tem frases que me fazem pensar que vc iria é por toda essa questão..
                  e sim, tenho medo que nosso relacionamento chegue a um ponto que vc não sinta mais e só vai ficando por ficar.. tenho medo do que tudo isso pode causar em você/nós..
                  e sei que vc quer se importar/sentir, mas por algum motivo vc se limita ou simplesmente não sente e não julgo, porém acha que você iria querer continuar se continuasse assim?
                  amor, eu só quero te conhecer.. só quero realmente te conhecer sem nenhuma barreira ou limites, quero que sejamos tudo um para o outro e que tenhamos uma relação que inspire outras pessoas
                  quero você, não o Isaac Vinícius que todos conhecem e elogiem, mas quero sua pior parte, entende? aquela que você não mostra a qualquer um, aquela que ngm vê.. quero que me aproxime nesse ponto ou além..
                  quando digo que quero que seja meu, e por completo e sem receios que eu irei embora quando tiver isso, que irei desistir ou cansar..
                  eu sei oq eu quero, eu sei oq eu te peço.. e se peço é porq estou disposta a ficar, permanecer e amar qualquer versão sua, seja você alegre, seja você chorando ou em uma crise se machucando..
                  como você sempre disse, é tudo ou nada..
                  e não quero que me entenda mal, mas nunca te quis por metade.. então por favor, se quiser, pula.
                  estou aqui, te seguro e não faria nada para que te magoasse e se arrependesse de tal escolha..
                  e mesmo que não escolhesse, por você eu permaneceria.
                  e sim, eu quero que se importe, quero ter a mesma conversa diversas vezes com você até que fiquemos bem.. sou sua mulher, nao deveria se preocupar em quantas vezes iremos falar..
                </p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >eu sei o homem que tenho sim ao meu lado, e entende que eu abriria mão de qualquer coisa por você? sem brigas ou você até mesmo precisar insistir?
                  sou sua e quem vai construir um futuro comigo é você, então foda-se os outros nem..
                  não me importo em desagradar quem for para te agradar.
                  nem eu realmente concordo com você, de coração e nunca dei brecha para qualquer coisa..</p>
              </div>


              {/* CARD COM 3 FOTOS */}
              <section className="relative overflow-hidden bg-[#faf8f8] px-5 py-16 md:px-8">
                {/* Detalhes decorativos */}
                <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-100/30 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                  {/* Título */}
                  <div className="mb-10 text-center">
                    <div className="mb-4 flex items-center justify-center gap-4">
                      <span className="h-px w-16 bg-rose-200" />
                      <span className="text-xl text-rose-300">♡</span>
                      <span className="h-px w-16 bg-rose-200" />
                    </div>

                    <h2 className="font-serif text-3xl italic text-slate-700 md:text-4xl">
                      Alguns momentos do nosso dia 09/09
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                      Porque eles merecem ser guardados para sempre.
                    </p>
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm md:p-8">

                    {/* Coração decorativo superior */}
                    <div className="mb-6 flex items-center justify-center gap-4">
                      <span className="h-px flex-1 bg-rose-100" />
                      <span className="text-2xl text-rose-300">♡</span>
                      <span className="h-px flex-1 bg-rose-100" />
                    </div>

                    {/* Fotos */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">

                      {/* FOTO 1 */}
                      <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                          <img
                            src="/foto4.jpeg"
                            alt="Momento especial"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        {/* Detalhe */}
                        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                          ♡
                        </span>
                      </div>

                      {/* FOTO 2 */}
                      <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                          <img
                            src="/foto5.jpeg"
                            alt="Momento especial"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                          ♡
                        </span>
                      </div>

                      {/* FOTO 3 */}
                      <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                          <img
                            src="/foto6.jpeg"
                            alt="Momento especial"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                          ♡
                        </span>
                      </div>

                    </div>

                    {/* Rodapé do card */}
                    <div className="mt-7 flex items-center justify-center gap-4">
                      <span className="h-px w-20 bg-rose-100" />
                      <span className="font-serif text-sm italic text-rose-300">
                        sejamos nossos, sempre
                      </span>
                      <span className="h-px w-20 bg-rose-100" />
                    </div>
                  </div>
                </div>
              </section>


              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >obrigada pela sinceridade, por se expressar e me aproximar aqui..
                  eu não acho tóxico e realmente entendo a situação nem, e como sempre disse, se pra você é importante então para nós é..
                  Da mesma forma que você cuida e me respeita eu irei cuidar e te respeitar..
                  a gente antes de tudo e todos..</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >amor eu quero as mesmas coisas e realmente preciso de tais..
                  Vamos viver cada um desses momentos e irá deitar e ter meu corpo para si da mesma maneira..
                  “O infinito é pouco comparado ao quanto te amo”
                  quero sim seu sobrenome, Isaac Vinícius..
                  por favor, volte❤️</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >eu estou tentando entender/resolver desde ontem nem.. mas sinceramente parece que quanto mais tento, mas você me afasta.. e em alguns momentos eu só aceitei vc ficar mais na sua, apesar de não querer ficar assim..
                  sobre tocar meu rosto, eu realmente não curto de tal jeito, ainda mais que parecia estar me apertando(desculpe, mas senti assim)..
                  entendi e me desculpe novamente por ter apagado.. e sempre te apoiarei a escrever oq sente..
                  eu sempre te digo que apesar de ser seus pensamentos, estou aqui pra entender e mudar se for necessário.. não é apenas algo seu e acho que quando entender isso, se tornará mais leve até para lidar..
                  quero sim continuar, e sinto muito se deu a entender que não quero mais.. e você, ainda quer continuar?
                  entendi.. pra ser sincera eu notei mesmo.. eu sempre gostei de sertanejo e não cantei pensando em alguém que escutava, mas algumas letras realmente lembram fatos passados e isso não é legal.. mas sim, claro que teve algumas que cantei até pra você mas não sei se notou..
                  e afinal, o que pensou sobre o meu e seu passado?
                  eu sei que se fecha.. e odeio isso, mas não vou forçar nada nem.. não há caminho traçado.. e prefiro recomeçar com você quantas vezes forem do que terminar..
                  eu espero que seja pra ser e que possamos fazer acontecer.., tenho dúvidas de até quando vc tentará lidar sozinho, até quando vai querer ficar na sua para depois “voltar pra mim”, dúvida e medo se continuaremos juntos após isso..
                  não chamaria isso de erro.. mas não sei como te ajudar a superar todos esses pensamentos se não me deixar ajudar..
                  se soubesse o quanto isso me afeta nem.., mas eu sei que leva tudo em consideração e que tudo é diferente.. nunca julguei ou critiquei isso, e amo receber suas mensagens sobre trem passando.. amo porq é importante pra vc, porq escolhe partilhar algo seu comigo..
                  tirando algumas cvs que tivemos, acho que essa foi uma das frases que mais me chateou ler… e é meio hipocrisia você dar tal sugestão sabendo que sempre foi “ou estamos namorando ou não, isso de meio tempo não existe”.. mas de todo jeito, obrigada por “não ficarei com tantas, e nenhuma, obviamente, nesse meio tempo”..    :)
                  sempre disse que queria você, e minha vontade continua a mesma..
                  eu sei que será sua realidade por um tempo.. entendo que não queira e gostaria que não fizesse mesmo.. pensei tantas coisas pra ser sincera..
                  eu sempre te entendi e ofereci abrigo seja vc falante ou quieto.., sempre estive e permaneci aqui..
                  o mais breve possível.. também estou e qualquer coisa sabe que permanecerei aqui com você..
                  eu entendo.. estou aqui.
                  se cuida, Isaac.. você sempre vai me conhecer mais e mais.. não se preocupe neném..</p>
              </div>


              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >eu deveria estar chorando ao acabar de ler essas coisas?
                  se soubesse o quanto me alegra saber de tudo isso.. de como eu sempre quis que se abrisse para mim e me aproximasse..
                  e realmente, sou muito falante com você e curto isso nem, mesmo que não fale tanto mas escute e sempre se faz presente..
                  eu te amo amor e amo tudo o que te envolva, e cada detalhe que me disse agora..
                  e sim, desde o dia 16 eu consigo pensar em como te amo e que és tudo para mim..</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >eu amo saber sobre você e por favor, sempre me permita isso..
                  obrigada neném..
                  eu acho um pouquinho sim, mas não vai me fazer bem até tudo isso passar..
                  tmb te amo amor, acima de tudo e todos você também é minha única prioridade.
                </p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >sei lá amor, eu sei que não era tais intenções mas isso acabou comigo.. eu passei a noite e madrugada pensando, tremendo, com dores sem conseguir controlar e odeio essa versão minha.. e acho que você mal a conhece e sim, odeio estar tão vulnerável a ponto que tudo me machuque e é horrível sentir isso e viver assim..
                  eu to exausta e já passei do meu limite, não quero continuar assim, não quero viver mais tudo isso e o pior é que não depende nadinha sobre minha pessoa e ainda assim me afeta tanto.. afeta ao ponto de eu passar um culto inteiro evitando te olhar e tendo agonia em ouvir qualquer som/musica/palavra.. eu mal conseguia respirar, eu tremia e rolava meu Instagram sem ao menos ver nada e sim, minha vontade era ter ido embora desde que cheguei e falaram comigo.. mas não iria embora sem te falar ou despedir.. então fiquei msm sabendo que isso me causaria crise, mesmo sabendo que não me faria bem e que minha mente iria pensar, pensar e pensar.. e o pior? por um momento eu só me entreguei pra essa confusão, não conseguia mais tentar me acalmar e só fiquei ali..
                  é estranho como as coisas são né?!
                  e eu me sinto tão exposta e idiota, sério nem.. e odeio me sentir assim ainda mais em um ambiente que eu gostava.. mas tipo todos já sabem e comentam e fica uma vibe tão constrangedora kkk
                  é pesado demais tudo isso e por algum motivo, me desculpe porq eu não queria que fosse assim, mas me fez sentir raiva de você em certos momentos e juro que não quero deixar isso me dominar e pelo contrário, quero te amar e te aproximar mas não sei como..
                  eu sei que você trouxe n sugestões, sei que me contou no dia que descobriu, sei que está disposto a fazer o for pra mim e nem sei como te agradecer por tanto e só quero que realmente isso passe, que ela pare e que fiquemos bem..  não era pra ser difícil, isso é o básico vei.
                  as vezes me pergunto oq fiz pras coisas serem assim, estávamos tão bem, juntos e de repente assumimos e o mundo desmorona, mas até quando? até onde? o que mais vamos ter aguentar?
                  eu sei lá, talvez me arrependa de enviar/falar isso tudo, mas se eu não falar eu me perco e por me perder, eu deixaria de me importar..
                  então só te peço desculpas por estar distante, te afastar e não saber o que dizer na maioria das vezes..
                  espero que entenda e se não, eu te entendo tmb..
                  só saiba que apesar/além de, eu ainda te amo e você é tudo pra mim, nem.🥺</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >nem, você sempre é bem vindo independente do quão quieta eu queira estar..
                  entendo que não podia e até disso senti falta..
                  sei que teve seus motivos e sempre vou respeitar isso, mas já está no seu presentinho de várias formas..
                  eu realmente espero que nunca sinta e nem quero te colocar em situações que talvez fariam vc sentir.. e pra mim é horrível sentir isso, mas precisava ser sincera com você..
                  me desculpa nem.
                  não sei como, mas se cuida viu?!</p>
              </div>

              {/* CARD COM 3 FOTOS */}
              <section className="relative overflow-hidden bg-[#faf8f8] px-5 py-16 md:px-8">
                {/* Detalhes decorativos */}
                <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-100/30 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                  {/* Título */}
                  <div className="mb-10 text-center">
                    <div className="mb-4 flex items-center justify-center gap-4">
                      <span className="h-px w-16 bg-rose-200" />
                      <span className="text-xl text-rose-300">♡</span>
                      <span className="h-px w-16 bg-rose-200" />
                    </div>

                    <h2 className="font-serif text-3xl italic text-slate-700 md:text-4xl">
                      Alguns dos nossos momentos
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                      "Porque tudo o que te faz sorrir, te faz feliz."
                    </p>
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm md:p-8">

                    {/* Coração decorativo superior */}
                    <div className="mb-6 flex items-center justify-center gap-4">
                      <span className="h-px flex-1 bg-rose-100" />
                      <span className="text-2xl text-rose-300">♡</span>
                      <span className="h-px flex-1 bg-rose-100" />
                    </div>

                    {/* Fotos */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">

                      {/* FOTO 1 */}
                      <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                          <img
                            src="/foto8.jpeg"
                            alt="Momento especial"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        {/* Detalhe */}
                        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                          ♡
                        </span>
                      </div>

                      {/* FOTO 2 */}
                      <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                          <img
                            src="/13.jpeg"
                            alt="Momento especial"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                          ♡
                        </span>
                      </div>

                      {/* FOTO 3 */}
                      <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                          <img
                            src="/foto9.jpeg"
                            alt="Momento especial"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                          ♡
                        </span>
                      </div>

                    </div>

                    {/* Rodapé do card */}
                    <div className="mt-7 flex items-center justify-center gap-4">
                      <span className="h-px w-20 bg-rose-100" />
                      <span className="font-serif text-sm italic text-rose-300">
                        apenas te amando, sempre
                      </span>
                      <span className="h-px w-20 bg-rose-100" />
                    </div>
                  </div>
                </div>
              </section>


              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >tudo oq eu queria agora era ter seu abraço, deitar no teu colo e me prender ao laço.. queria tanto seu beijo, ter seu corpo junto ao meu e nem, você sabe que seu abraço só se encaixa com o meu e que a vida não tem graça sem a gente junto..
                  sabe, eu fico lembrando de sábado, foi tão gostoso deitar-me em seu peito, beijar sua boca, acariciar seu cabelo e sentir como se só existisse nós e nada além fora do seu quarto..,
                  eu amo isso nem e sinceramente acho que foi um dos melhores momentos que tivemos nas últimas semanas e a cada dia você só me dá a certeza que essa é minha melhor e mais importante escolha.
                  obrigada por ser você, obrigada por cuidar de mim, obrigada por nos permitir viver tantas coisas boas e obrigada por ser meu…
                  e nem “eu troco minha paz por um beijo seu, eu troco meu destino pra viver o seu, eu troco minha cama pra dormir na sua, eu troco mil estrelas pra te dar a lua e tudo o que você quiser e se você quiser, quero sim usar seu sobrenome.”
                  não sei se você já acordou ou que horas irá, mas quero que tenha a certeza que te amo, que te quero, que te admiro e que sim, sou sua mulher e pra sempre serei sua princesa e pessoa que terá que saber lidar nos dias bons/alegres/dificeis/chatos/confusos e até mesmo naquele que você não se aguentar..
                  eu não irei embora, “se sim, até onde?” até que a morte nos separe amor.. e sim, eu quis e quero manter essa promessa..
                  eu sei que as coisas estão cansativas entre nós, sei como se sente e o quanto isso está nos afetando.. mas por favor, vamos dar um jeito de superar isso, de ficarmos melhores e não deixar que as coisas nos afastem.. afinal, não é nós contra nós mesmos, e sim contra tudo e todos e sei que eu deixei me levar em vários momentos pela dor e pressão, mas não quero continuar seguindo assim, não quero que você siga assim..
                  então de coração, me diga a melhor maneira de lidarmos e assim faremos..
                  eu quero você amor, sempre te quis e não quero te afastar por nada, nem por passado e muito menos questões nossas..
                  mas eu preciso dizer que é você a pessoa que eu amo/escolho, preciso dizer que é com/em você que me sinto em paz, que é você meu lar e meu único amor..
                  sejamos nossos, que busquemos juntos melhorarmos e sermos cada vez mais unidos e felizes, porque a minha felicidade tem nome/cpf/numero/gmail/endereço e tudo se resume a você, meu Isaac Vinícius.
                  apenas me encontre e me deixe cuidar de você?
                  eu te amo nem, e o infinito sempre será infinitamente pequeno.🫶🏻
                  descansa amor, mas se cuide e nao me afaste por favor..
                  “estou aqui por ti, por mim e por nós”
                  “eu amei/amo te ver”
                  “me encaixo no seu cheiro e ali me deixo inteiro”
                  “e sai sem eu dizer, o tanto que eu gosto, me desmancho quando encosto em você..”
                  “e onde quer que eu vá, você está em tudo o que eu preciso, te vivo.”

                  e minha vontade? é te ouvir falar que não quer ir embora, que te faço bem, que apesar dos pesares ainda me quer com todos meus defeitos e medos, e daqui pra frente será só nós dois e nada mais..
                  estou com saudades de você, sinto sua falta amor..

                  te amo, te quero, te admiro e te vivo, meu amor..</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >também espero que esteja bem, que tenha bons sonhos e que descanse..
                  por mais que eu perguntei, sabia que não havia uma resposta para tal.. e não cobrarei também que tenha um prazo determinado, porq isso não funciona e sabemos disso..
                  acho que não estamos nada bem.. tenho a sensação que estamos nos perdendo na intimidade e na comunicação, e isso me assusta..
                  sei que era pra sermos mais que próximos, mais que unidos e juntos.. e éramos assim, só que por algum motivo as coisas mudaram e sigo tentando concertar as coisas mas parece que estamos sem sincronia..
                  pra mim é agonizante não ter notícias suas, não saber como/onde está sendo que me acostumou a fazer tudo e saber de tudo sobre você.. é muito estranho sair de centenas de mensagens para três em um dia de 24h e eu entendo que você/nós estamos passando por um momento bastante complexo, mas realmente será isso que entregaremos um ao outro? tamanha ausência será nosso normal, amor? e se for, só me fala..
                  eu sei que as coisas continuam iguais e na realidade é sim pior, a cada dia que passa.. e me pergunto como melhorer se vivemos em trocas de turno basicamente, se ao menos temos contato e tudo oq um casal deveria ter..
                  estou sim cansada, assim como você mas não, não quero parar e terminar.. pelo contrário, venho tentando me/te aproximar todos os dias e sinto muito que talvez não tenha notado isso..
                  mas ainda assim, se você quiser terminar ou parar me diz, não vou brigar com você.. mas quero te entender e saber suas vontades também..
                  foi um privilégio meu viver com você, todos os momentos foram mais que incríveis e especiais.. também amei te ver amor, e sei que nunca mentiu sobre, pois sempre me sentia amada quando me olhava..
                  doeu ler isso, porque sim parece uma despedida, e não sei se será ou não, e só você pode me dizer.. mas sla quando estará aqui para isso.. e tmb te entendo :/
                  apenas te peço que se cuide, e bom, aquele beijo, aquele carinho em sua nuca, aquele abraço apertado e aquele te amo sussurrando enquanto te olho e admiro..
                  volta pra mim, por favo, só volta..
                  e eu te amo, Isaac Vinícius, vulgo meu amor.
                </p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >é tão bom poder ler novamente um texto seu..🥺
                  eu entendo, ambos sentimos falta dos momentos que passaram e apesar de, sempre estarão em nossas memórias como disse.. e acredito que somos sim, ainda sou sua e ainda quero que seja meu e que juntos possamos ser melhores do que já fomos um dia.. não perdemos o “até que a morte nos separe ou o aceito” mas estamos sim passando por momentos que estão “desafiando” se somente isso irá nos separar, e espero de coração que possamos superar isso juntos..
                  sei que é, e apesar de estarmos nos amando em turnos diferentes e até mesmo perante a distância, fico feliz que continuamos escolhendo um ao outro e não desistindo nas dificuldades do dia a dia.. e sim, é de muito aprendizado tudo isso.
                  nem, acabe com o tempo que passamos longe, com a saudade que sentimos quando não estamos perto..
                  ainda somos nós, de um outro jeito e de uma outra maneira, mas ainda assim somos nós.. e quero muito que estejamos dispostos a fazer o que for para que as coisas voltem a ser leves e claras.. nunca quis apenas estar na sua bio ou que usasse uma aliança por usar.., sempre quis ser sua antes de tudo, e de nada importa se assim não for, porque no final eu só quero significar algo/tudo para você, quero que nossa bio tenha significado para nós e que não seja apenas um @ com um emoji.. quero olhar pra minha mão e ver que não é apenas um “enfeite no dedo”, como disse Marília, mas que tenho alguém que realmente me ame, que faça meu pior dia ser incrível apenas por falar comigo e sempre me lembrar do privilégio que eu tive e do amor de Deus ao me confiar você..
                  dormir/sonhar com você é tudo oq mais quero, sentir sua respiração, ter seu corpo quente junto ao meu e nossos carinhos, enquanto assim estamos..
                  eu também sinto sua falta Isaac, mais do que nunca e mais do que eu imaginei sentir.. também te quero mais e para sempre..
                  eu sei amor e obrigada por me amar nos piores momentos, quando é difícil ficar/permanecer/falar..  e sim, independente de quando/onde/como for, minha melhor escolha sempre será você..
                  eu já entendi e sinceramente preciso muito que faça isso, seja me aquecer/esfriar/iluminar e principalmente me amar.. sei que foi mais que uma promessa e eu também estarei com você contra tudo e todos..
                  não precisamos de outras vidas nem, apenas essa e quero sim ser amada por você todos os dias, quero sim te amar e te fazer a pessoa mais feliz do mundo e sendo seu único e verdadeiro amor..
                  eu sei que vamos sim, só precisamos trabalhar isso juntos e fazer acontecer.. eu prefiro recomeçar com você mil vezes do que te perder por qualquer coisa, nem.. é sobre todo o processo, te amar, te reconquistar todos os dias, te respeitar e honrar em todos os momentos e circunstâncias.. quero estar ao seu lado, quero cada vez ser mais sua..
                  eu amei essa “definição” de “eu amei te ver”🥺 e sim, te digo o mesmo, é sobre amar/sentir/colher/aprender/escolher/viver você”, Isaac Vinícius..🫶🏻
                  sabe, eu amo o fato que aquele dia estava bem ruim e que odiei aquela aula de código, mas quando você respondeu sla, me tirou um sorriso tão leve que me surpreendeu, você deu um novo significado para um dia ruim e com simples mensagens coloriu tudo.. e foi ali que percebi que algo seria diferente, e obrigada por fazer isso com todos os meus dias desde o dia 16..
                  sim amor, tudo o que me faz sorrir me faz feliz.. e já entendeu que com você nunca me faltam motivos para tal? independente de qualquer situação sempre haverá um sorriso meu para/com você..
                  muito me alegra saber que minha vida te dá vontade de viver e que estar comigo é de muita valia para você.. e realmente, seu amor diminui toda minha dor e vontade de desistir de mim mesma.. ele é como uma brisa de ar fresco, é como se eu estivesse me afogando e você me salvasse.. e isso é mais que uma dádiva/benção..
                  procure por elas, amo saber o quanto me ama ou ver você demonstrando através delas.. e sim, você é perfeito e te amar é perfeito.. quero sempre mais e mais apesar dos momentos/circunstâncias..
                  Irei ler várias e várias vezes, e estou/estarei sempre aqui..fico muito feliz que ainda veja e que goste deles, sobre o site eu estava pensando em atualizar algumas coisas, e sim, sinto falta de programar e isso me surpreende.. mas por você sempre foi mais que incrível fazer isso.. obrigada por tirar minha dúvida, eu tava bem pensativa..
                  podia voltar a me avisar quando ele passasse.. sempre gostamos disso.., talvez eu as cantem para você..(mesmo sabendo que essa função é sua, e sim amor, to morrendo de saudade e vontade de te ouvir cantando pra mim🥺), você vai ter.., me ligue e tomamos enquanto conversamos.. entende que para cara sentimento/dor sua eu estarei disposta a trazer e solucionar?!
                  eu já entendi, e por isso só te peço uma coisa.. esteja comigo, fique comigo e reconstrua nosso relacionamento comigo.. pois sim, só quero você Isaac, e somente com você eu fico bem..
                  me faltam palavras para tal, amor.. mas seja melhor do que já foi para mim, seja sua própria referência dia após dia e sim deixo você ser o clyde e eu a bonnie, você Leon e eu Ada wong e aos demais casais sem ao menos conhecê-los.. pelo simples fato de saber que sempre irá ser sua melhor versão para mim/nós e amo confiar nas suas referências..
                  amo confiar em você.
                  amo amar você, Isaac Vinícius.
                  “viva comigo e por mim.. viva ao meu lado.”</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >quero muito te ver..
                  espero que tenha um ótimo descanso e dando sequência um ótimo dia e que tudo venha ser da melhor maneira possível, pois o máximo é o mínimo que merece nem..
                  se cuida viu, estou e estarei aqui ao acordar..
                  aquele beijo e aquele abraço dizendo que te amo.❤️</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >sei que está com raiva de mim e da situação que acabamos de “conversar”, se é que se pode chamar aquilo de conversa..
                  mas acabei de tomar meu banho e está do jeito que gosta.. então apesar do que falamos, do que aconteceu e de como vamos lidar quando/se voltar.., ainda assim é importante pra mim te agradar..
                  sinto muito que verá em tais momentos.. e espero que fiquemos bem.
                  amo muito você, isaac..
                  não se esqueça disso.</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >esses dias me disse que é como se sente amado, que é como tem a certeza que estou aqui..
                  então bom, não vai ser uma discussão que mudará o fato que sempre estarei aqui e te amando, não vai ser uma discussão que fará eu querer te afastar, muito pelo contrário, prefiro te aproximar com algo que seja importante e te faça bem nesses momentos..
                  e como sempre te digo, é assim que me desafia a te amar, e eu sempre te mostrarei que aceito amá-lo..
                  então me desculpe por não ter te chamado durante o culto e pelas coisas que disse agora a noite..
                  se cuida amor.. estou aqui por/para você.</p>
              </div>

              <div className="space-y-8">
                  <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                > eu imagino, realmente fazia tempo que eu não mandava assim.., e também sentia falta disso.., fico feliz que não seja chato.. e saber que ficou feliz ao acordar e ter foto me alegra demais.. você merece tanto amor..
                  sabemos que está, por mais que não seja exatamente comigo, eu vivo isso com você.. é bom saber que sou uma boa lembrança, que minha presença te faz bem..
                  eu senti exatamente isso hoje, quando falei que não estava bem e você ainda não tinha voltado, foi seu vídeo cantando que me acalmou, que me fez bem e lembrar de vários momentos ao seu lado.., sinto muita falta disso..
                  eu tmb te amo, amo ser amada por você e que bom que temos o privilégio de ter um ao outro.. são esses sentimentos e certezas que eu me refiro quando pergunto “oq foi?”, justamente para entender e receber todo o amor que me entrega de forma única..
                  descansa por ter parado de enviar.. e não precisa agradecer nem por ele e nem pelas fotos, sempre foi por amor.. mas obrigada por enxergar isso e valorizar..
                  te amar tmb é oq sou.. e só te peço que não pare nem por um minuto..
                  obrigada por isso.. que bom que ficou da melhor maneira e nos seus conformes nem.. eu imagino que sinta, mas apesar disso, me conte quando acordar, divida comigo oq pesa, e apesar de estarmos vivendo em trocas de turno, seguimos tentando cuidar um do outro e isso me conforta tmb..
                  eu imaginei que não tinha olhado.. eu entendo, mas não quero que o receio domine e te impeça de usar..
                  eu também te amo, e muito, não há de quê amor.. eu entendo sim, e sei que é importante e especial para você, é importante para nós..
                  desculpa pelos spoilers.. mas queria muito que tivesse visto..
                  amo te amar e ser amada por ti, o infinito sempre será pouco.. me senti mais próximo de você hoje..❤️</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >dormiu né..
                  bom, quero te desejar uma ótima noite, um ótimo descanso e excelente sonhos(se possível, sonhe comigo, sonhe com a gente)..
                  muito obrigada por tudo,  saiba que tenho muito orgulho de você e que já estou com saudades.. :)
                  eu te amo nem, e estou aqui.. se cuida, por favor, e não tome tantos remédios viu?!
                  beijos, de sua gatinha🫶🏻</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >eu te amo tanto nem, e sim muito além do que eu poderia imaginar.. te amar se tornou a única coisa que ainda faz sentido para mim, se tornou a melhor parte de viver porq é por/pra você..
                  e quero sim continuar fazendo isso todos os dias da minha vida, da melhor maneira/forma para você e por nós..
                  os meus também, como sempre disse você sempre trouxe cor aos meus dias, e ultimamente eu tenho dito muitos momentos cinzas.. mas quando vens tudo se transforma em um belo ambiente colorido e alegre.. e como diz o pequeno príncipe “Se tu vens, por exemplo, às quatro da tarde, desde as três eu começarei a ser feliz. Quanto mais a hora for chegando, mais eu me sentirei feliz. Às quatro horas, estarei inquieto e agitado: descobrirei o preço da felicidade! Mas se tu vens a qualquer momento, nunca saberei a hora de preparar o coração.” E viver ao seu lado, e viver exatamente esse trecho e não somente ao ir te encontrar, mas ao receber uma mensagem/foto/audio/ligação.. a minha felicidade é você, Isaac.
                  e realmente nem, nada mais faz sentido se não for para você, e tudo oq faço ao decorrer do meu dia é pensando em você..
                  sempre amei receber foto sua, te ouvir tocar e admirar seu/meu belo corpo que sempre quero tocar desde segurar sua mão/apoiar minha cabeça em seu ombro/tocar seus braços/repousar minhas pernas encima das suas/colocar meus pés por trás de sua perna apenas para sentir que está ali..
                  sei que governo e quero continuar fazendo isso pelo restos dos nossos dias.., eu sei que não votou..
                  bom, meu dia foi ruim, tive muita demanda hoje, tive sim aquela louca fazendo graça, tive meus momentos de fotografias lá, tive um café doce como sempre gosto.. mas não tive você nele, não tive a gente apesar de estarmos aqui e isso era/é a única coisa que faz de toda essa rotina suportável.. e oq torna tudo leve, sabe?
                  hoje eu só queria seu colo, só queria você e até mesmo todo aquele silêncio que fica quando não temos nada a dizer.. mas queria você..(queria sim que me desse banho, que cuidasse e me amasse em um lar).. obrigada por estar e por me amar mesmo no meio de toda essa situação e em trocas de turno.. obrigada por ficar.. e te ter ao meu lado é tudo que mais quero e desejo..
                  sei que conquistará e irei te apoiar em cada momento, sabes disso.. então me cativas, me mantenha ao seu lado e me escolha, eu tenho feito isso porque te quero e tenho certeza que é você.. e somente você.
                  eu sei que está amor, eu te conheço e é notável.. acha que também está me afastando no meio disso tudo?
                  não irá me perder e a única pessoa que eu quero e faço questão é você..
                  não precisava agradecer pelo convite a praia, eu te chamaria mil vezes se fosse mil vezes.. eu entendo e gostaria muito que fosse numa próxima.. queria conversar com você sobre isso, porq sei que ficará pensativo e acho que é de muita valia a gente alinhar algumas coisas sobre essa viajem..
                  mas bom, da minha parte eu te garanto que estarei presente aqui, apesar de não poder ir te encontrar, estarei aqui para conversar, te dar notícias de onde quer que eu vá, do que eu irei fazer e todo o resto.. estou indo viajar sim, mas continuarei sendo quem sou com você em qualquer canto desse mundo.. continuarei te priorizando/respeitando/apoiando/amando independente de qualquer coisa.. só não iremos conversar se você não quiser, só iremos nos distanciar se você permitir.. porque eu não irei, nunca será uma viajem que me afastará de você e temo sim como será por saber que não está bem e que mal estamos conversando.. mas saiba que da mesma maneira que estou aqui, agora, também estarei aqui, mesmo estando lá..
                  e sla nem, eu desistiria de ir se fosse o melhor para você, eu ficaria e iria pra sua casa todos os dias ou vc vir.. apenas para te ter..
                  a melhor maneira de viver a minha vida é vivendo ela com você.. somente assim estarei realmente aproveitando/feliz e nos meus conformes..
                  não há de que.. eu entendo e como sempre te disse “não há de que” fiz e faria mil vezes apenas para te fazer sorrir e feliz..
                  amo te mandar fotos, te ligar mesmo que não atenda sempre.., te informar, te amar.. obrigada você por ser quem é e por ser o homem que eu amo mais que tudo e até mais que a mim mesma..
                  eu amo te amar e essa sem dúvidas é a melhor parte da minha/meus vida/dias.. tudo melhora quando Isaac Vinicius se faz presente..
                  obrigada por tanto nem, por me admirar em momentos que não vejo beleza alguma em mim, por me apoiar quando só quero desistir.. obrigada pelo amor incondicional que me entrega e me permite.. e sim, amo meu namorado muito mais que ele possa imaginar/pensar/saber..
                  “o infinito é infinitamente pequeno quando comparado..”
                  eu notei sim amor e juro que amei te beijar sem pausas, amei ter seu corpo ao meu, amei ter seus lábios nos meus, amei ter sua língua quente tocando cada parte da minha boca com tanta vontade e desejo.. eu não queria sair dali, eu não queria parar, não queria ir embora.. uma vida nunca será suficiente para te amar como quero e merece..
                  eu sempre te achei perfeito desde o dia 16 e continuo te achando cada vez mais.. sinto que estraguei “um pouco” nossa relação me importando com tudo isso.., e sim, sei que sempre me olha, sei que assopra o cabelo pra mim porq acho sexy, sei que faz o seu melhor enquanto solo porque também é pra mim, obrigada pela água que nunca faltou e por ir embora por eu não aguentar mais o ambiente..
                  obrigada por segurar minha mão quando eu não tinha força pra segurar a sua naquela noite..
                  realmente tem sido muito pesados, nem, eu não quero que as coisas piorem por eu estar indo viajar, não quero te perder ou que sinta que iremos afastar por tal.. eu não quero e nem vou permitir, mas preciso que queira e faça o mesmo.. e sim, eu te amo e amo mais que tudo, não se esqueça disso e não duvide disso jamais..
                  sigo tentando.. se cuida viu?!
                  obrigada por cada palavra dita, não imagina a falta que sentia disso e a importância que dou para tais.. também estou aqui, te amando e te querendo mais do que nunca, cada dia mais te desejo e a cada dia e mais difícil suportar toda essa saudade que você me causa..
                  obrigada amor, bom descanso e boa noite.. ótimos sonhos e se acordar com pesadelos/assustado me ligue, estarei aqui para te acolher e cuidar de você..
                  eu amei/amo te ver, te ter exclusivamente e unicamente para mim.., eu amo tudo o que te envolva nem.., cada parte, cada detalhe da sua pessoa são únicos e tão admiráveis..
                  obrigada por isso..🥺
                  você é, é você é somente você meu único e eterno amor.❤️
                  de coração, obrigada pelos detalhes..
                  morro de saudades por ti.</p>

              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >
                  tem mais de 24h que não tenho noticias suas.. é muito agonizante isso, nem..
                  espero de coração q esteja um pouco melhor, que se alimente e tome alguma coisa..
                  por favor, vai se cuidando e precisando de qualquer coisa sabe que estou aqui..
                  quando quiser voltar, me chama viu?!
                  tenha uma boa noite, bom descanso e bons sonhos..
                  saudades sua :/</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >
                  isso parece tanto uma “última conversa”..
                  ouvirei sim suas indicações, apesar de ouvir Lisboa e de janeiro a janeiro todos os dias pensando em você/nós.. nem, eu quero ficar e permanecer com você e ao seu lado..
                  e apesar de talvez não querer tal resposta, você ainda quer namorar comigo? ainda quer continuar?
                  sei que temos modos/jeitos diferentes, assim como qualquer casal, mas como viveremos/lidaremos?
                  independente de quando for responder ou se for, seja sincero, por favor..
                  bom, obrigada por estar aqui e pela mensagem, eu amei e amo te ver..
                  sinto falta do meu Isaac.. sinto sua falta, e isso dói.. escute 2much do justin bieber, te dediquei ontem pelo insta, mas nao viu ainda..
                  apenas saiba, eu te amo e estou aqui, sempre estive e estarei, é aonde quero estar e quem quero ao meu lado é você..
                  volte pra mim, volte por nós….</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >
                  sabe, eu realmente queria ter te visto hoje, não só pelo fato de estar indo viajar amanhã, mas por sentir sua falta. queria ter ficado com você como ficamos no nosso último encontro, me sentir bem novamente ao seu lado e poder cuidar de você..
                  como você mesmo disse, nunca sabemos quando será um adeus. e eu sempre tive receio de pegar estrada estando “diferente” com alguém, seja com meus pais, meus irmãos e, hoje, principalmente com você. já viajei muito e presenciei tantos acidentes e mortes que carrego comigo o medo de não voltar para casa, de não voltar para quem amo e para quem me quer bem.
                  eu temo, sim, a morte, não pelo que vem depois, mas por pensar em quem fica e na dor que precisa enfrentar. perder alguém dessa forma é o tipo de dor que não passa, e não, o tempo não diminui o luto.. foi exatamente nisso que pensei naquela noite no cemitério, e foi por isso que chorei. eu já perdi alguém estando “brigada” e, tudo bem, eu era apenas uma criança, não tinha a compreensão que tenho hoje, mas, até hoje, me culpo e carrego isso comigo. talvez seja por isso que me dói tanto ver você visitando esses lugares com tanta frequência ou, às vezes, não se importando tanto com a própria vida.
                  eu ligo, eu me importo e me preocupo com você. sei que você tem seu jeito e que, às vezes, gosta de se isolar de todos, e eu respeito isso. mas, se for se afastar até mesmo de mim, peço que ao menos, me dê notícias de hora em hora. me permita saber que você está bem, nem que seja com o mínimo. para mim, isso tem um valor enorme e você sabe disso.. quando não tenho notícias suas, confesso que minha mente se torna um lugar difícil de suportar, porque o medo e os pensamentos acabam tomando conta de mim..
                  mas, se você realmente prefere se desligar de tudo e de todos, eu vou sim entender e respeitar seu espaço, mesmo que isso me doa. só queria que você entendesse que não é sobre querer te prender ou controlar seu tempo, é sobre me importar com você, querer saber se está bem e ter a tranquilidade de saber que a pessoa que amo continua aqui.
                  desculpa, mas preciso sim saber isso diariamente e sei o quão chato pode ser..
                  enfim, nem, espero que você tenha um bom fim de semana e que, aos poucos, as coisas melhorem. não sei muito bem como terminar essa mensagem, só queria que você soubesse tudo isso que estava pensando.. queria ter te visto, te abraçado, cuidado de você e sentido que estava tudo bem entre nós antes de viajar.
                  e apenas para ressaltar, te amo e te vivo!</p>
              </div>

              <div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >
                  estão limpos..
                  acabei de tomar banho agora e resolver um pouco sobre meu dia de trabalho, nem chegou e sei que terei muita demanda.. espero que dê certo e de qualquer forma as 17h meu pai me busca, então sei que só preciso aguentar até as 16:45 kkk
                  sinto falta de conversar com você..
                  e sim, apenas para dizer que “estou aqui”..
                  boa noite amor e tenha bons sonhos, aquele beijo e aquele abraço apertado🥺🫶🏻
                  eu te amo, meu Isaac</p>
              </div>

<div className="space-y-8">
                <p
                  className="relative rounded-[1.5rem] border border-rose-100/80 bg-white/90 p-7 text-[16px] leading-8 text-slate-600 shadow-[0_12px_40px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 before:absolute before:-top-3 before:left-7 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:border before:border-rose-100 before:bg-rose-50 before:text-sm before:text-rose-400 before:content-['♡'] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10 md:text-[17px]"
                >hoje completamos um mês juntos, meu amor..
feliz 09/09! 

sabe, eu me lembro tão bem daquele dia… de cada detalhe, de cada sentimento e até mesmo da tristeza que senti por imaginar que não teria você na minha formatura, que não encontraria o seu olhar no meio daquela multidão e não teria a sua presença em um dos dias mais importantes da minha vida. mal sabia eu que, enquanto sentia a sua falta, você já estava preparando uma das surpresas mais lindas que eu poderia receber. mal sabia que, logo ali, depois que eu saísse e chegasse à pizzaria, você estaria me esperando com um desejo meu nas mãos e o coração pronto para me surpreender.
eu sempre te disse que os detalhes me ganham de uma forma inexplicável, e você parece ter aprendido a linguagem mais bonita do meu coração. você escuta, observa e guarda cada pequena informação como se amar também fosse isso: prestar atenção. e talvez seja mesmo. talvez o amor more justamente nesse cuidado de lembrar daquilo que o outro, às vezes, nem imagina que será lembrado. você faz com que eu me sinta ouvida, vista e amada até nas coisas que parecem pequenas, mas que, para mim, significam o mundo inteiro.
e eu arrisco dizer que você guarda cada detalhe porque, de alguma forma, a minha felicidade também se tornou importante para você. e não existe nada mais bonito do que perceber que alguém não apenas escuta os nossos desejos, mas encontra maneiras de transformá-los em realidade.
eu me lembro de te ver saindo do banheiro e sentir, lá no fundo, que alguma coisa estava prestes a acontecer. segundos depois, você caminhava na minha direção com flores e uma caixa nas mãos, e, naquele instante, pareceu que o mundo inteiro havia silenciado. por alguns segundos, não existia mais ninguém, não existia o barulho ao redor, não existia nada além de nós dois. era você vindo ao meu encontro e eu percebendo, mais uma vez, que existem momentos capazes de ficar guardados na alma para sempre.
eu disse sim antes mesmo que você terminasse a pergunta, porque o meu coração já sabia a resposta. te abracei, te beijei na frente dos meus pais e não me importei com quem estava olhando, porque como poderia esconder o amor que transbordava em mim? não fazia sentido te amar pela metade, te querer em silêncio ou fingir que você não ocupava um lugar tão bonito na minha vida. naquele momento, eu só queria viver a felicidade de escolher você e deixar que o mundo percebesse.
obrigada por ter tornado aquela noite tão perfeita, única e inesquecível. obrigada por usar aquele perfume que eu tanto amo, por pentear o cabelo do jeitinho que eu gosto e, principalmente, por estar ali, presente, fazendo daquele momento algo ainda mais especial. talvez você nem imagine quantas dessas pequenas coisas ficaram guardadas em mim, mas eu me lembro de todas. e, se pudesse voltar àquela noite, escolheria vivê-la novamente, com o mesmo frio na barriga, os mesmos olhos marejados e a mesma certeza bonita de que era você.
mas hoje eu não quero apenas recordar o que vivemos de mais lindo. quero também falar sobre tudo o que desejo construir com você daqui para frente. quero que sejamos capazes de continuar nos escolhendo quando os dias não forem tão bonitos, quando a rotina pesar, quando as palavras faltarem e quando a vida parecer difícil demais. que nunca nos falte sensibilidade para enxergar o coração um do outro, nem coragem para conversar, recomeçar e cuidar daquilo que estamos construindo.
quero que sejamos abrigo, não mais uma tempestade; descanso, não mais um peso; companhia, não uma obrigação. que a nossa presença torne a vida um do outro mais leve, mais doce, mais alegre e mais bonita de viver. que saibamos surpreender um ao outro não apenas com flores, presentes ou grandes gestos, mas com a delicadeza de permanecer, com a disposição de compreender e com a certeza de que, mesmo nos dias difíceis, ainda vale a pena segurar a mão um do outro.
e, acima de tudo, quero te oferecer o amor de 1 Coríntios 13. aquele amor que é paciente, bondoso, que não se ensoberbece, que não busca os próprios interesses e que tudo suporta, tudo crê, tudo espera e tudo persevera. sei que esse não é um amor fácil, porque amar assim exige renúncia, maturidade, humildade e a disposição diária de olhar para além de si mesmo. mas é esse o amor que Cristo nos ensina, e não faria sentido dizer que te amo se eu não desejasse aprender a te amar dessa maneira. não quero apenas te amar com a intensidade dos meus sentimentos, quero te amar também com a firmeza das minhas escolhas, com a verdade das minhas atitudes e com Deus sendo o centro de tudo o que construirmos.
eu não te prometo que todos os dias serão como aquela noite, mas te prometo que desejo continuar fazendo da nossa história um lugar onde o amor seja cultivado, o cuidado seja constante e a vontade de permanecer seja maior do que o orgulho. quero continuar conhecendo as suas versões, descobrindo os seus detalhes, admirando as suas qualidades, acolhendo as suas fragilidades e encontrando motivos para me apaixonar por você até mesmo na simplicidade dos nossos dias.
eu te amo, eu te vivo, eu te adoro, eu te admiro, eu te quero, eu te desejo e me inspiro em você. amo quem você é, amo o que desperta em mim e amo a possibilidade de crescer ao seu lado. você é uma daquelas respostas que fazem a gente olhar para o céu com o coração cheio de gratidão, porque, às vezes, Deus escreve as coisas mais bonitas de maneiras que jamais conseguiríamos imaginar.
que sejamos nossos, meu amor. que sejamos eu e você, você e eu, sem perdermos quem somos, mas aprendendo a construir quem podemos ser juntos. que nunca nos falte amor para começar, sabedoria para continuar e fé para confiar os nossos caminhos Àquele que nos uniu.
e, se um dia a vida nos perguntar o que queremos fazer de tudo isso, que a nossa resposta esteja nas pequenas coisas: em um abraço demorado, em um beijo inesperado, em uma conversa sincera, em uma oração de mãos dadas e na escolha diária de continuar.
feliz um mês de nós, meu amor! que este seja apenas o primeiro capítulo de uma história que ainda tem tanto para florescer, tantos sonhos para realizar e tantas versões nossas para conhecer. que venham os dias comuns, os extraordinários, os desafios e as conquistas. quero ter a alegria de viver cada um deles com você, construindo um amor que não seja perfeito aos olhos do mundo, mas verdadeiro diante de Deus e bonito dentro de nós.

eu te amo, Isaac Vinícius, meu amor. e, entre todas as formas bonitas que a vida poderia encontrar para me surpreender, a minha favorita foi me permitir encontrar você.
hoje, amanhã e em cada dia que nos for permitido viver: sejamos nós. ❤️

feliz 1 mês, meu amor! ♡</p>
</div>

            </div>

            {/* CARD COM 3 FOTOS */}
            <section className="relative overflow-hidden bg-[#faf8f8] px-5 py-16 md:px-8">
              {/* Detalhes decorativos */}
              <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-100/40 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-100/30 blur-3xl" />

              <div className="relative mx-auto max-w-6xl">
                {/* Título */}
                <div className="mb-10 text-center">
                  <div className="mb-4 flex items-center justify-center gap-4">
                    <span className="h-px w-16 bg-rose-200" />
                    <span className="text-xl text-rose-300">♡</span>
                    <span className="h-px w-16 bg-rose-200" />
                  </div>

                  <h2 className="font-serif text-3xl italic text-slate-700 md:text-4xl">
                    Para finalizar, tinha que ser com eles
                  </h2>

                  <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                    Porque é assim que você me desafia, e é assim que se sente amado, e é assim que eu quero te amar, sempre.
                  </p>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-rose-100/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm md:p-8">

                  {/* Coração decorativo superior */}
                  <div className="mb-6 flex items-center justify-center gap-4">
                    <span className="h-px flex-1 bg-rose-100" />
                    <span className="text-2xl text-rose-300">♡</span>
                    <span className="h-px flex-1 bg-rose-100" />
                  </div>

                  {/* Fotos */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-6">

                    {/* FOTO 1 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/foto10.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Detalhe */}
                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>

                    {/* FOTO 2 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/foto11.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>

                    {/* FOTO 3 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/foto12.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>

                    {/* FOTO 4 */}
                    <div className="group relative rounded-[1.5rem] border border-rose-100 bg-rose-50/40 p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <img
                          src="/hoje.jpeg"
                          alt="Momento especial"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-sm text-rose-400 shadow-sm">
                        ♡
                      </span>
                    </div>
                  </div>

                  {/* Rodapé do card */}
                  <div className="mt-7 flex items-center justify-center gap-4">
                    <span className="h-px w-20 bg-rose-100" />
                    <span className="font-serif text-sm italic text-rose-300">
                      seus pezinhos..
                    </span>
                    <span className="h-px w-20 bg-rose-100" />
                  </div>
                </div>
              </div>
            </section>


            <div className="mt-16 text-center">
              <div className="mx-auto mb-8 flex max-w-md items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-200" />
                <span className="text-rose-400">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-200" />
              </div>
              <p className="font-serif text-2xl italic text-rose-500 md:text-3xl">
                Eu te amo, e o infinito, é infinitamente pouco.
              </p>
              <p className="text-slate-600 mt-4 text-sm md:text-base">
                Espero que goste, neném..
              </p>
              <p className="text-slate-600 mt-4 text-sm md:text-base">
                E sim, eu te amo muito, e sempre te amarei, meu Isaac Vinícius.
                Apenas volte para mim..❤️
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-black">
          © {new Date().getFullYear()} Ana Luiza Souza - Todos os direitos reservados.
        </div>
      </section>
    </>
  );
}
