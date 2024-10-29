// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Show the main site after building the car
    document.getElementById('start-btn').addEventListener('click', () => {
        buildCar();
    });

    // Start flower animation
    createFlowers();
});

// Function to create flower elements and animate them
function createFlowers() {
    const flowerContainer = document.getElementById('flower-container');
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flowerContainer.appendChild(flower);
    }
}

// Function to animate shapes and transition to the main site
function buildCar() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        setTimeout(() => {
            shape.style.opacity = 1;
            shape.style.transform = 'scale(1)';
        }, index * 300);
    });

    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
    }, shapes.length * 300 + 1000);
}

// Custom messages for each day
const messages = {
    1: "დღე 1 შენს გარეშე მთელი დღე უენერგიოდ ვარ. აი თითქოს გაციებულივით ხო იცი საწოლიდან ადგომა რო არ გინდა და ზუსტად მაგ დღეს რო შეგტენიან მილიარდ რაღაცას გასაკეთებლად. დამკვეთს ვეჩხუბე და ბოლოს ბოდიში მომიხადა. აღმოვაჩინე რომ ინგლისურადაც ისეთივე კარგი იუმორის გრძნობა მაქ როგორც ქართულად. ჩემმა იორდანიელმა ბრომ აღნიშნა. ოვერალ საშინელი დღე იყო იმდენად საშინელი რო მაქსის პოულმაც ვერაფერი ხალისი შემმატა. ასე უშენოდ ვერ გავძლებ. ვზივარ და ვუყურებ წაშლილ სთრიქს და აღდგენის ღილაკს. ეს კი დამთავრდება მარა at least friendship მაინც არ დამთავრდეს. (დღის ნათელი წერტილი ფბ გავხსენი და პატარაზე შენი სთორი დავინახე)",
    2: "დილით ადრე გავიღვიძე მასლ მემორით ტელეფონი გავხსენი რო მეპასუხა მესიჯებზე მერე ტიკ ტოკი გამეხსნა და შენ ნაპასუხებებზე მეპასუხებინა. მივხვდი რო არაფერი იქნებოდა და ჩავრთე მოტო ჯიპი რომელიც იმის გამო რომ დილით ადრე იყო უკომენტატოროდ გაუშვეს და დილის 8 საათზე მე წავიყვანე ჩემთვის. (ოთახში შემომივარდნენ დაგვაძინეო). 7 ის ნახევარია და ექმითან დავრეკე ვიცი რო ჩემით იამაყებდი იმ ყურში ისევ არ მესმის და ორშაბათს უნდა მივიდე. ოოო როგორ მინდა დაგაბულინგო მაკლარენის გამოო.  უფსთ ახლა აღმოვაჩინე რო ქლოუსებში მყავხარ მე შენი სთორი არ ვნახე შენ ჩემი კი. ენაზერ მიზეზი თუ რატომ ხარ უკეთესი ჩემზე. ელენე საეჭვოდ დაემთხვა ჩემი და შენი ალექსანდრადრას და კოდუას გაყრა. ბავშვიან ქალებთან ინტერაქცია ძაან მიყვარს. მე ხო დიდს ვგავარ და ამ ბავშვებზე 5-6 წლით დიდი ვარ რეალურად და ძაან სერიოზულად რო ველაპარაკებო ამ ხალხს. აუტისტი ბავშვი ყავდა ქალს ლიფტში იმენა ვიბაასეთ. აქვე კობახიძის და მთლიანი ოცნების დედა მოვტყან არჩევნების წინ რო გაახსენდათ და დაარელიზეს ტრეკი. ამას რო კითხულობ ალბათ გაყალბებულია უკვე არჩევნები.",
    3: "დღე 3 კვირა არის filler ეპიზოდები როა ფილმებში ეგეთი. პროსტა მეშვიდე დღე იყო საჭირო და ჩასვეს.  ჩემ წინ რიგში ქალს ტელეფონმა დაურეკა და რუსულად ეწერა ლალი აი მაგას ან შვილი არ ყავს ან ვიღაცა ვისი მომავალიც ადარდებს? რა ლალი. ახალი ტრენდი როა მე 27 ოქტომბერს (რამე რუსული) ძაან ჩვენი ვერსია მომაფიქრდა მე მივდივარ დიმიტრი მაზეპინის ურალკალთან რომ დაასპონსოროს ჩვენი გუნდი რადგან შენ არ წახვედი არჩევნებზე. (აქვე დავსძენ ჯერ არ გაუყალბებიათ(გააყალბებენ 6 დღეში)) მე ხო ძალიან მიყვარს საყოველთაო პრობლემების განხილვა ალის ველაპარაკებოდი იორდანიის სასწავლო სისტემაზე ტიპს იქ უნდა გადაეხადა 57.200 დოლარი და აქ უწევს 22500. რაღაცა ასეთი ჩვენთანაც რო იყოს მართლა კაი იქნებოდა ყველა არ ჩააბარებდა და უფრო ნაკლები უმუშევრობის პრობლემა იქნება. ხალხი ადრე დაიწყებს პროფესიის არჩევას. მივეთრიოს სახლში დავწვე და არ ვაკეთო არაფერი და დაველოდო რბოლას. ისე რას ფიქრობ ნეტა შენ ვინ მოიგებს. ალბათ ლანდო გინდა მარა ობიექტურად სწრაფია მაქსი, ჩეკოს არ მიუღია განახლებების სრული პაკეტი. ისე გასლი ნახე რა კარგია? იმუშავა ალპინის განახლებებმა. (ამას რო კითხულობ უარესად წყალწაღებულები რო იყვნენ არ გამიკვირდება (შეიძლება არც კითხულობ იდკ)).  უი ჯორჯის ნაწილი არ აქვს და პიტიდან დაიწყებს გეცოდინება ესეც ალბათ. აუ ლულუ რა მაგარი კაცია თავის ნაწილებს აძლევდა და არ გამოართვა. გრიდის გოგოები დააბრუნონთქო რო ვიძახდი სტრიპტიზის ცეკვა არ მიგულისხმია რატო ხანაინ თხლად ჩაცმული გოგოშკები ამერიკის რბოლას? გატეხა ლუისის გახრეშვამ. რამე რო ხდება ტელეფონისკენ ვწევ ხელს რო რამე გითხრა. ოოო ელენე რა თრეშთოლქი გვემაზებაა. ძალიან მაგარი რბოლა იყო იმედია უყურე. ",
    4: "დღე 4-ენაზერ დეი ენაზერ სლეიიი. დღეს ალბათ უნდა მოგეწერა რეის ვიქიაო და წაგევანაძორებინა არჩევნები week კიდე არაუშავს მე ვიტყვი შენ მაგივრად. ამდენი ხნის მერე პირველად მივდივარ ექიმთან, ოღონდ ჯერ უნიში უნდა წავიდე. დებილების ჯგუფი ჩავსქროლე და მივხვდი რო არაფერი არ ეშველება მაგ ხალხს ალბათ შენც მაგას ფიქრობ. უნიში 2 ზე მქონდა ლექცია ვიძახებ ლიფტს კორპუსში რო ავიდე და ოთახს ვამოწმებ. მესიჯი მხვდება 13:46 ზე დღეს არ გექნებათო. მეტროში ვიღაც სისხლს კითხულობს შეწუხებული სახით შენ და შენი ლექტორი გამახსენდით მსჯელობა რო გაკლდებოდა სულ. აუ ისე ახალი სისხლიან ბანერებზე ძაან ვიცინე. სმეშ გრაფიკოსი ყავთ ქოცებს. ალბათ ამოგიგდებდა ჩემ კომენტარებს იმ ტიპის პოსტზე მთელი წელი რო ვაჯვავ. ჩვეულებრივი ტროლია ტიპი ანიმეს ფოტოთი. ექიმმა პირველივე კითხვა გაციებული ხო არ ყოფილხარო დიდი ხანი რო ხარ გაციებული არხები იხშობაო. მაგრად დამაიმედა შეიძლება ხვალვე გაგეხსნასო ან 3 თვეშიო. ენივეი. ძალიან არ მინდა გრავითი ფოლსივით დავმთავრდეთ. ისედაც დამთავრებულ სერიალზე ბოლოს untill next summer კადრი რომ იყო და დებილი იმედი მოგვცეს. სხვათაშორის ეს დღეებია ადრე ვიძინებ ნუ შეძლებისდაგვარად რბოლებმა ცოტა ამომაგდო მარა 9-10 ზე მძინავს უკვე. ხვალამდე 💚",
    5: "ნეტა შენც გახსენდები რენდომ მომენტებში რაღაცას რო დაინახავ ან გაიგებ?  დილაა 7 საათი ჩაის ვსვამ და უცებ მეჩითება ოცნების ახალი კლიპი კაკაბაძე ლოჩოშვილი გველესიანი კიტეიშვილის. ძიუდო ხო დამიმთავრეს როგორც სპორტი, წარმატებები ნაკრებს მაგრამ მე მაგათ თამაშებს აღარ ვუყურებ. არა ფედერაციისგან არაფერი გამიკვირდა ფული მისცეს მაგრამ კარგი რა მარაზმია სრული ბედნიერი სახით რო აკეთებს ფინტებს კიტეიშვილი. უცბად გაბლატავებული ყლე დაფის ჩვრები. ძალიან ცივა. დარწმუნებული ვარ შენც იწუწუნებდი ამაზე მარა მე რო სიცივეზე ვიწუწუნებ ძაანაა მართლა. აი ასეთ მომენტებში დამაკლდი ყველაზე მეტად, რაღაცა ისეთზე რო გეწუწუნებოდი რის აზრზეც არ ხარ მარა მაინც რო გესმოდა. ლითერალი ყველაფერი გესმოდა. ავტობუსში მათხოვარი პირველად ვნახე. საღამოს წაძინებებზე აი დილით რო ადრე დგები მაგის დასაბალანსებლად. ძილი არ გამორჩენილა სადაც არ იქნებოდი, მეღვიძება ეგრევე ტელეფონს ვიღებ, მახსენდება და უკან ვდებ. ახალი ტესტაროზა ჩამოიყვანეს შუმის ხელმოწერით. ჩაგიგდებდი და მომწერდი მინდაო. ვიცი ელენე მეც მინდა. ოვერალ მაგარი ბანძი დღე იყო აი პროსტა დასასკიპი. დო ვსტრეჩი.",
    6: "რაღაცებს რო ვინახავ შენთვის ჩასაგდებად ეგ ნორმალურია? შარლმა სამშვიდობო მისიაში მიიღო მონაწილეობა და ავიაგამანადგურებლით იფრინამ გოიმ გვერდებზე ზეგ დადებენ ამას. ახლა შემხვდა ცხრილი და wdc ხო ჩვენია მარა wcc ს რო ფერარი უფრო იგებდ ვიდრე რედ ბული რა პარადოქსია? U understand the homework very well. ზუსტად შენ რო დაგელაიქებინა მგაიტო დავარეპოსტე მელოტის ვიდეო. რას არ მეძახიან მარა რენდომ მელოტობა დაწყებული ჯგუფელი გიუშას რატო მეძახის. გიუშ ბებეროოოო. ოცნების მიტინგს ვუყურებ რა თესლად და მოშნად მოყარეს ხალხიიი. მომკალი და სულ რო ჩემი ვინმეს აქცია იყოს ვერ გავალ და ვერ დავდგები ვინმეს გამო. რატო ესალმება ირაკლი კობახიძე თბილისელებს უკაცრავად. ჩამოიტანეს საზარბაზნე ხორცი რეგიონებიდან და აბოდიალებენ. კახა კალაძე რატო აპელირებს თბილისლებზე. ვიცით კაცი რო არ ხარ თბილისელი არ არი აუცილებელი, შეგიძლია უბრალოდ ხალხი ან მეგობარი დაუძახო. სახლში მივედი და ყავის აპრატი დამახვედრეს. ჩემი და ყვის ურთიერთობა კი იცი რძიანი (მამაკაცი დედაკაცი რა მნიშვნელობა აქ) 3 თვეში ერთხელ და მეძახიან მოდი შენ ხო იცი ესენი. რა ესენი ვიცი. დენში რაც ერთდება რატო ვიცი ყველაფერი. მგონი ხუთშაბათი მძიმე დღე გაქ არ მახსოვს და გაძლება ხვალ.",
    7: "ერთი კვირა გავიდა, ნამდვილად არ მეგონა ამდენი ხანიც რო გასტანდა ეს. ნეტა შენც გქონდა რამე მოსაყოლი ამ ერთ კვირაში? ნეტა მოვუყვებით საერთოდ ამის მერე ერთმანეთს რამეს? ვიცი რო იცი მარა შეუგნებელი ხალხის ატანა არ მაქ. რატო ხდება რო ხალხთან ვისთანაც კომუნიკაცია არ გაქ უფრო სასიამოვნო ურთიერთობა შეიძლება გქონდეს ვიდე ვისაც ელაპარაკები. ალბათ იმიტომ რომ იმის პირით აბრუნებ შენ პასუხებს იდკ. ჩემი ჯგუფელი გრიშა 4 საათს გადის არჩევნებზე რო მივიდეს. ძალიან მიყვარს ისეთ ხალხთან ხუმრობა ყველაფერს რო ხვდებია და ახსნა არ სჭირდებათ. აუუ ადამიანის გადახვევა შუა ზებრაზე მაგარი რაღაცაა. უცებ დაინახე შეხვდი გადაეხვიე გააგზრძელე გზა. სულ პატარა მახსოვდა მეორე კურსზეა უკვე. (შარშან ჩააბარა რენდომ ტიპია ჩემ ფაკულტეტზე და აქედან ვიცი)  მე და შენ რო ვლაპარაკობდით გახსოვს ლოვეები გვერდით უნდა ისხდნენ თუ წინო. მე რო ვთქვი წინ უნდა იყვნენთქო ლექტორმა და ორმა ჯგუფელმა გადამიარა არაო გვერდითო. უფრო ახლოსს გყავსო და ეგეთები . მეტროში დიდი სკამი როა მაგაზე ვზივარ მარტო აი არავინ არაა 6 სკამია ერთზე მე ანუ 5 ცარიელი სხვაგან ყველგან ზიან. გოგო შემოვიდა და ფეხზე დადგა. რაღაცა რაც გინდა უნდა ადგე და სცადო, ოღონდ რაც გინდა შენ და არა საზოგადოებას. ჩვენ ვართ რეალურად ის ხალხი ვის წინაშეც მართლები უნდა ვიყოთ. შეიძლება სხვებისგან ავიღოთ რაიმე რჩევა მაგრამ ადექი და გააკეთე. ზუსტად მაგიტომ არ ვნანობ ცხოვრებაში არაფერს, რაც მინდოდა ვცადე მაინც. აკეთებ იმას რაც გინდა რაც სწორი გგონია და რაც გაბედნიერებს. ძაან მიჭირს, აი ვერ აგიღწერ ისე. მგონია რო რაღაც ნაწილი რაც მქონდა აღარ მაქ. ადამიანი დავკარგე რეალურად ვინც იყო ის ვინც მინდოდა. იდეაში უნდა გამეცნობიერებინა ამ პერიოდში, რომ შემიძლია ასე ყოფნა მარა უარესად ვარ. დილა შენით იწყება, საღამო შენით მთავრდება. ყველა სიზმარში ხარ. არ ვიცი ალბათ სადღაც რამე დებილობას გავაკეთებ. თუ ამას კითხულობ ალბათ გავაკეთე. თან შეგაშინე კიდეც ალბათ შენ ხო ყველაფერი ჩემი გაკეთებულის გეშინია. ბოლო მესიჯი ალბათ მილიონჯერ წავიკითხე და არ ვიცი. ყველაფერს ვხვდები მაგრამ როგორ შეიძლება ეს ყველაფერი ერთ მხარეს იყოს და მეორე მხარეს საერთოდ არა. სად გავაკეთე არასწორად რაღაცა ვერც ვხვდები არ ვიცი. მგონია რო შემეძლო და ვერ ვქენი, მაგაზე საშინელი რაღაცა არ არსებობს რავი. ახლა მივხვდი რეალურად რა ყოფილა ადამიანის სიყვარული. ",
    8: "მგონია რო მკვდარ ადამიანს ველაპარაკები, რომელიც ხან იმ პასუხებს მცემს რაც მინდა და ხან იმას რასაც რეალურად იტყოდა. გუშინ მართლა შეტევა დამემართა ბოლოს ისე ვიყავი, ცოტა ღაპაღუპითაც კი ვყარე ცრემლები. რა კაცის საქმეა მარა ხანდახან უხდება. ისიც არ ვიცი ამას რისი იმედით ვაკეთებ, მგონი შენ გქონდა ნათქვამი ადრე დღიურის კეთება ამშვიდებსო თუ რაღაც ეგეთი. ნუ ენივეი ალბათ უნდა მივეჩვიო უშენოდ ყოფნას. ვაფშე ყველაფერი გავაკეთე მგონი რასაც შეიძლებოდა ყურადღება გადაეტანა მარა არაფერმა შედეგი არ გამოიღო. უკვე აგრესია და უენერგიობაც მეტყობა. სახლში დამსდევენ რა გჭირსო. დედაჩემს ლითერალი ჩემზე მეტად შენ უყვარხარ მგონი, მომკლავს რო ვუთხრა. გავიდეს ეს დრო ეგებ რამე მოხდეს. დავაკვირდი რო ინსტაგრამის რილსები არც ჩამირთავს იმის მერე. სხვათაშორის დავაკვირდი და ტელეფონზე ბოლო 10 წლის განმავლობაში პირველად ჩავურთე ნოთიფებს ხმა. (ხო ძმა აი ველოდები რა რაღაცას ხო აზრზე ხარ) (არ ველოდები). ბავშვს ვეთამაშებოდი და ნაძვის ხეებიანი რეიტუზი ეცვა და დავცინე ოქტომბერში ვის აცვია საახალწლო რაღაცებითქო. შენი ზედა გამახსენდა მერე და გავჩერდი. ვახ მამაჩემი ოლიმპიადას ისე ინტერესით უყურებს. სიმი არის ლუკა რო გამოდის ფ4 ში. ცოტა ხანში მოუნდება და დამადგმევინებს დიდი სიმულატორს.  ბოლტმა მომწერა და ელენე რო დაწერა ისე ბედნიერმა გავხსენი ვერ აგიხსნი. თანამშრომლის სახელი ყოფილა. რაც არ უნდა ვიძახო მაღალი განმავლობის მანქანა მიხდება და რა ვქნა. მეორე კორპუსში ჩემთან უმეტესად სხვა ქვეყნის სტუდენტები ცხოვრობენ, სტადიონია ეზოსთან გავუარე ბავშვი ეკაჩავებოდა ჩემზე ორჯერ მაღალ და ორჯერ განიერ მუქ ტიპს თან ეძახის (ზის იზ მოი ტერიტორიი). შენი ტიკ ტოკის ვიდეოს ლიფზე ვუყურე. ყველა ინსტაგრამის ნოთიფიქეიშენზე გული მიცემს. არ მევასები კობა. ძალიან ვიცინი სანდროს დედმ რუსეთიდან პალმა ჩამომიტანააა. დედაჩემი მომადგა გიორგი ცოლი მოიყვანე პატრონს ჩაგაბაროო. მაშინებს ეს ქალი. ალბონი რა დებილია ბიჭოოო. ცუდად ვარ.",
    9: "რაღაც universe ში ხო გამოვიდა ეს ყველაფერი და ნეტ იქ რა როგორ მოხდა. ჭიამაია დამესიზმრა დავგუგლე და კარგი ბედის ნიშანიაო. ჩემი აზრით მჭირდებოდა. ისეთი დღეა დღეს ყველფერზე რო უნდა გველაპარაკა.  რბოლის რაღაცას ჩაგიგდებდი, არჩევნების გაყალბების რამეს. არც არაფერი ჩამირთავს მთელი დღეა ტყუილად ნერვებს არ მოვიშლი. შენც იქნებოდი ალბათ და ეჭვი მაქ ერთი ტიპი მოვაფერადეთ. დანარჩენი საღამოს ვისაუბროთ. მიყვარს ეგზიტპოლები ყველას თავისთვის რო უხარია. გააყალბეს და ეგაა რა. ჩვენი საშველი არც არი და არც იქნება. ჩემი აზრით ნოუ კონტაქტის საუკეთესო გაწყვეტის იდეა იქნება აქციები და შინააშლილობა რო დაიწყება. ალბათ ბევრი გინება იქნებოდა ჩვენ ჩათში ახლა. ძალიან ნერვები მეშლება ამ ყველაფერზე რაც ხდება. ილიამ ძალიან მაგრად მოიგო. თურმე ძალიან ხმამაღლა მიყვირია ყველა ითიშებათქო. ჩემი და სთორავდა თურმე და ახლა ვუყურებ ვიდეოს სადაც ვკივივარ ჩახლეჩილი ხმით. კვალიც საინტერესოდ მიდის ჩეკო და ოსკარი რო გავარდნენ მგონი გუნდებმა დაიკიდეს მეორე პილოტები და მაქსი ლანდოზე გადაერთნენ ბოლომდე. ძალიან ბევრი ლუდი დავლიე და გული მჭვალავს. ეეე იუკი რა კარგი იყო და გატეხა. თავისი შეცდომაა ბოლომდე. ოოო ახლა ტვინს გაბურღავს მდინარაძე იმით თუ როგორი ინტელექტუალი მრბოლელია. ბანძად დამთავრდა მაინც დღე. კობას ვუსურვე უკეთეს საქართველოში გაღვიძება შენამდე. ადიოს და ხვალამდე. ",
    10: "ან მოვიწამლე ან ძაან სტრანი ვირუსი ავიკიდე. საეოლში ერთი წამიც რო გავჩერდე გვერდზე გადაბრუნებული ან მუცელზე ეგრევე მერხევა. წამომჯდარი რო ვარ ჯარგად ვარ მარა მეძინება წამომჯდარი ვერ ვიძინებ ვბრუნდები და ვსო. სხვათაშორის იმ 15 წუთში რაც მეძინა სიზმარშიც მოახერხე დაბულინგება. იმენა საწოლიდან ვერ ვდგები, არაუშავს ვიწვები მარა ვერც ვწევარ ანუუ. 5 საათზე ჩამძინებია სადღაც ყველაზე უცნაურ პოზაში, ბოლო ვიტირე რო ვერ ვიძინებდი. საათ ნახევარი მეძინა მთელი ღამე. ტელეფონის დამტენი რო გაფუჭებულია და რაღაც კონკრეტულად მუშაობს ეგრე ვარ ზუსტად. 38.5 მქონია. ნეტა შენ როგორ ხარ, გადაურჩი მგონი ამ დებილურ ვირუსებს აცდი, შენი ტიკ ტოკი შემხვდა და ჯანმრთელად ჩანდი. ჩვევების გადასაჩვევად 18 დან 250 დღემდე არის საჭიროო. მინდა გადაჩვევა რა ვქნა. მაგრამ თან არ მინდა. საშინელი დღეა აი ვაფშე არაფერი არ იყო. რბოლაა ერთი და ეგ მაწყნარებს მარა დიდი იმედები არც მაგაზე მაქვს. შენ რას შვები აპირებ ყურებას?  ოკონი პიტიდან დაიწყებს თურმე, ძალიან უკან წავიდა ესტებანი. არ ვიცი მოტივაცია დაკარგა თუ რა მარა ძალიან ჩამქრალია. ელენე ილიაზე ეს ლაიქები და გულები რა არის, არ ვიცოდე მაინც როგორ გეგოიმება ეგ კაცი. აი ეს შნირი სირები რა ნამუსით აორგანიზებენ აქციას ბიჭო. ერთი რაღაცა ევალებოდათ, ჩემი ხმა არ დაკარგულიყო. იიი პარლამენტში არ შევალთ. არ შეხვალთ და თქვენი დედაც მოვტყან და ვინც მაგაზე იდარდებს იმათიც. იიი აქციაზე გამოდით. და შენ გვერდით ვიდგე შე ყლეო იქ. გვანცამ შემომიღო კარი და იწყებს. თვალში ვერ ხედავ, ყურში არ გესმის, თმა არ გაქ, ენერგია შენ არ გაქ. კაი პერსპექტიული 20 წლის ბიჭი ხარო და გავიდა. (თვითონ გადმომდო). ძაან მიყვარს ძველ სპორტულ მედიცინას რო ვიხსენებ. ელექტროლიტებში გავხსენი 5 კოვზი შაქარი და დავლიე. შეიძლება გულმა ვერ გაუძლოს მარა 6-7 წლის წინ მუშოაბდა. ახლა დავფიქრდი და ელენჩიკს რატო არ გეძახდი. საკმარისად ნერვებისმომშლელია. მილანის ემიგრანტების ჯგუფში დაიწერა საქველმოქმედო პოსტები აღარ დადასტურდება თქვენმა მთავრობამ განაცხადა გიშველოთ აწიო. სპონსორის გატეშე დარჩნენ. პირველ რიგში ხო მაგ ციტრანონზე გაყიდულებს მოეტყვნებათ დედის ტრაკი. აქამდეც ვცხოვრობდი და მერეც არ გამიჭირდება. ღმერთის წყალობით ჯანმრთელიც ვარ და დებილიც არ მეთქმის. სხვა თუ არაფერი ნაცნობობით მაინც შევეტენები. მარა აი თქვენ რეგიდრონზე რო გაიყიდეთ და ჭიან კარტოფილზე 4 წელი რა გეყოფათ აგერ ვნახავთ. დედას შევეცი მე მაგათი. იუკის რატო არ უმართლეეეებს. ნახავდი ჩემ მიმს მარა ალბონი რეებს აკეთებს კაი რაა. რატკ გახდა ნასკარი უკაცრავად. ყველა ვიღაცას ეჯახება. სად ჯანდაბაში იყო 20 წამი ბლიად, შიგ ხო არ აქვთ ამათ. კიდევ ერთხელ გავიგებ რო კარლოს საინსი უნიჭიერესია და შევიგონები. ძაან დიდი მადლობა მამას დებილი რო არ გააკეთა. ფერარის პილოტი ხარ იდრიონამატ ჭკვიანი უნდა იყო აბა რა უნდა იყო. შარლს რო მოუწყდა ნაშოჩკა რო გვაჩვენეს უკან რებეკა რანაირად უყურებდ. (იიი ჩემ ბიჭს პრობლემები არ აქქ და ჭკვიანიაა). პირველი წრე და რესტარტი იყო საინტერესო. მაგარი ბანძი რბოლა იყო ისე. ორშაბათი მძიმე დღეა, წარმატებები ხვალ. ძილინებისა ",
    11: "შენი საყვარელი რეის ვიქი დაიწყოო. ალბათ ყველაზე ნაკლებად ველოდები რამეს ბრაზილიისგან. თუ სადმე გვიჭირდა პირველრიგში მანდ იყო ბოლო წლებში. ჩეკოზე დაიწერა 25 ში კი არა შეიძლება ამ სეზონშივე ჩაანაცვლონო. ჩემი აზრით არ უნდა ქნან ეგ ჩაამთავრებინოჯ ეს და 25 ში გაუშვან. ისეთი ტიპია ქვედა გუნდში არ ჩავა და კარიერას დაამთავრებს. მე სხვათაშორის კარგად ვარ, გუშინ რო ვკვდებოდი აღარ ვარ ისე. მეტროში ჩემ თვალწინ ვიღაც გოგომ კალაძე დააანფოლოვა. ქარყველი ერის კიდევ ერთი წარმატება. თვითმფრინავები რო კვალს ტოვებენ ეგ დამესიზმრა ახლა ავიხედე ზემოთ და გამახსენდა რო დამესიზმრა. დავგუგლე და გზაზ პროგრესს და ლონგ თერმ გოულებს ნიშნავსო. ძაან უცებ ჩამოღამდა, ვაფშე არაფერი არ მომხდარა დღეს. შენი ვიდეო შემხვდა ლასთ ოქტობერ და ნაუ. შარშან უკეთ ვიყავით კი ნამდვილად ბევრი რამე შეიცვალა. ნუ უკეთ რა ვიყავით მაინც. მე ხო წვერზე ორი მდგომარეობა მაქ როგორც კომპიუტერს. 1 და 0. ან არი და არი დიდი. ან არ არი. 0 ზე გავიპარსე და მაგარი დავიცინები ვატყობ. დედაჩემმა მამაშენს გავხარ ახალგაზრდობაშიო. არ ვიცი ეს როგორ გავიგო. თვითონ ეს კაცი მოეწონა ვისაც მადარებს და ბებიაჩემს ნარკომანი ეგონა პირველად რო ნახა. იდკ იდკ. იცი რომელ ხალხს ვერ ვიტან? მმმ კარგს რო ვერ დამაფასებ იყოს ეგრე. ბრო არ ხარ შენ კარგი და უკეთესადაა ეგ ადამიანი ახლა. ერთადერთი ცუდი ვინც იყო შენ იყავი. ორშაბათი ბანძი დღეა, ხვალ კიდე უთენია მივდივარ. აბა შენ იცი წარმატებიანი დღე. ",
    12: "ვიფიქრე საერთოდ გამეგრძელებინა თუ არა ეს ფორმატი მარა რავი იყოს რა. ძაან გამიხარდა სხვათაშორის შენი მესიჯი გუშინ. რაღაც მომენტებში შენც რო გახსენდებოდი რაღაცებზე. ჰუ ნოუს იქნებ ტიკ ტოკის სთრიქიც დავიწყოთ ოდესმე ახლიდან. ოჯახის წევრებმა და მეგობრებმა კი არა დილის 9 ზე ლაბში რო მივედი ლექტორის ასისტენტმა დამცინა წვერი რატო გაიპარსეო. არ ვიყავი მზად დილით ასეთი ეაღაცისთვის და კინაღამ აკაკის ვლეწე. ფოსტაში შემხვდა ყველაზე ევერეიჯ გოგო დღეს. აი ძალიან ჩვეულებრივი ვიზუალის არც ძაან ლამაზი მარა არც მახინჯი და უცნაურად ძვირიანი ტამსაცმელი რომ აცვიათ. და ისე გადმომხედა თითქოს მარტო მე ჩამომსვკოდეს ჩინური ბარახლოვკა ფოსტიდან. აუ ძალიან დავცინი ალტინფოს. ტიპები ირმა ინაშვილმა გადააგდო და ისე გაკოტრდნენ ტელევიზია დახურეს. შენ რო სულ მეუბნებოდი ჭკვიანი ხარო და გიმტკიცებდი არათაო მარტო არ ყოფილხარ. ახლა ვაკვირდები ჩემ ლექტორის მოქმედებებს და ბროს მართლა ჭკვიანი ვგონივარ, ისე ვიქცევი ლექციებზე არადა ძაან ისე ვარ რა პროსტა მესმის რასაც ლაპარაკობს. თურმე ძაან მაგარი მანიპულატორი ვყოფილვარ და ვერ ვხვდებოდი.  გუშინ ვენომის ყურება დავიწყე და შენი მესიჯი რო მოვიდა ისე გავთიშე არც მახსოვს სად ვიყავი. ამ დღეს ჩავამატებ საიტზე და გავაგრძელებ ყურებას. აბა ჰე აბა ჰო. ხვალამდე. ",

    
    // Add more days and messages here
};

// Function to open a message modal
function openMessage(day) {
    const messageText = messages[day] || "No message for this day.";
    document.getElementById('day-number').innerText = day;
    document.getElementById('message-text').innerText = messageText;
    document.getElementById('messageModal').style.display = 'flex';
}

// Close modal when clicking outside of it
function closeModal(event) {
    if (event.target === document.getElementById('messageModal')) {
        document.getElementById('messageModal').style.display = 'none';
    }
}

// Event listener for closing modal
document.getElementById('messageModal').addEventListener('click', closeModal);
