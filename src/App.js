import logo from './logo.svg';
import './App.css';

var roll = 1;

function getRoll() {
  roll = Math.ceil(Math.random()*20);
}

function App() {
  
  var parser, xmlDoc, formtext='';
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text, "text/xml");
  for (let i=1; i<21; i++)
    formtext += xmlDoc.getElementsByTagName("Roll_" + i)[0].childNodes[1].textContent + ' : ' +  xmlDoc.getElementsByTagName("Roll_" + i)[0].childNodes[3].textContent + '\n\n';
  console.log(formtext)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={() => getRoll()} />
        <div>
          {xmlDoc.getElementsByTagName("Roll_" + roll)[0].childNodes[1].textContent + ' : ' +  xmlDoc.getElementsByTagName("Roll_" + roll)[0].childNodes[3].textContent + '\n\n'}
        </div>
        <div>
          {formtext}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
var text = `<ThematicElement>
<Roll_1>
    <Name>Barbarism</Name>
    <Effect>The nation is brutally assailed by bestial,
primitive forces, whether from external enemies
or internal divisions. Naked violence, cruelty, ignorance,
and hatred are always near the surface of
things, either as threats pressing on the familiar or
as instincts and habits among the natives.</Effect>
</Roll_1>
<Roll_2>
    <Name>Decadence</Name>
    <Effect>The nation is voluptuously cruel, indulgent,
and indifferent to the prices it pays for its pleasures.
Unspeakable debaucheries and sordid delights are
in common circulation, and few ever think to question
the appropriateness of inflicting brutal evils in
order to obtain some elevated enjoyment or refined
pleasure. The PCs are regularly exposed to the consequences
of such indulgences and the damage they
inflict on others.</Effect>
</Roll_2>
<Roll_3>
    <Name>Despair</Name>
    <Effect>The nation is redolent of hopelessness and apathetic
submission to fate. It may be because some
overwhelming evil seems inevitably due to pass,
or because all prior efforts at improvement have
brought only worse suffering, or because some
bright cultural hope or golden age is now clearly lost
and ruined forever. The nation will tend to accept
evils and sufferings as inevitable, and the natives will
do little to rebel, resist, or defy their unhappy fates.</Effect>
</Roll_3>
<Roll_4>
    <Name>Exhaustion</Name>
    <Effect>The nation is depleted of something critical,
whether that is a tangible resource or their spiritual
reserves of enthusiasm and hope. Everything is
tired in this nation, with spent rivers, barren fields,
cut-over forests, and shorn hillsides. If material resources
are sufficient, the natives simply don???t have
the energy or enthusiasm to bring in more than they
presently do, perhaps out of a sense that nothing
good can come of any putative improvement.</Effect>
</Roll_4>
<Roll_5>
    <Name>Ignorance</Name>
    <Effect>The nation is an ignorant one, redolent of
(incorrect) superstition, false gods, blundering institutions,
and erroneous beliefs of all kinds. These
beliefs are somehow critical to the setting???s culture
or society, such that being rid of them would cause
some profound, potentially bloody disruption of life.
Life in this nation can go on as it does only so long
as the ignorance remains unilluminated, and the
vast majority of its populace would rather remain
in error than exist in chaos.</Effect>
</Roll_5>
<Roll_6>
    <Name>Oppression</Name>
    <Effect></Effect>
</Roll_6>
<Roll_7>
    <Name>Poverty</Name>
    <Effect></Effect>
</Roll_7>
<Roll_8>
    <Name>Precarity</Name>
    <Effect></Effect>
</Roll_8>
<Roll_9>
    <Name>Stratification</Name>
    <Effect></Effect>
</Roll_9>
<Roll_10>
    <Name>Violence</Name>
    <Effect></Effect>
</Roll_10>
<Roll_11>
    <Name>Enlightenment</Name>
    <Effect></Effect>
</Roll_11>
<Roll_12>
    <Name>Expansion</Name>
    <Effect></Effect>
</Roll_12>
<Roll_13>
    <Name>Hope</Name>
    <Effect></Effect>
</Roll_13>
<Roll_14>
    <Name>Justice</Name>
    <Effect></Effect>
</Roll_14>
<Roll_15>
    <Name>Legitimacy</Name>
    <Effect></Effect>
</Roll_15>
<Roll_16>
    <Name>Pageantry</Name>
    <Effect></Effect>
</Roll_16>
<Roll_17>
    <Name>Prosperity</Name>
    <Effect></Effect>
</Roll_17>
<Roll_18>
    <Name>Renewal</Name>
    <Effect></Effect>
</Roll_18>
<Roll_19>
    <Name>Triumph</Name>
    <Effect></Effect>
</Roll_19>
<Roll_20>
    <Name>Unity</Name>
    <Effect></Effect>
</Roll_20>
</ThematicElement>`