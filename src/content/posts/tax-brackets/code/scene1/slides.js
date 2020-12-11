
import React from 'react'
const slides = [
    (
    
      <p>
        If you want to sound real smart when you talk about taxes, you're going to need to understand three things: marginal tax rates, effective tax rates and tax brackets. These three are essential to thinking about tax planning, or policy, or really anything to do with taxes because they'll let you figure out how much of each of your dollars or euros or what-have-you are going to be taken by the government.
      </p>
    
  ), (
      <div>
      <p>
        The first time Americans had to worry about an income tax was way back in 1861 when the US government needed a way to pay for the Civil War. The system, just like today, was not a flat tax which would have meant that everyone would pay the same amount of tax on every dollar they earned, but was instead a progressive tax, which meant that different dollars were taxed at different rates.
        </p>
        <p>
        In 1861 it worked like this: the first $800 a person earned (equivalent to about $25k today) wasn't taxed at all, so anyone who made less than that didn't pay any income tax. They were in the "0% tax bracket", and this was the case for most workers; the new tax didn't impact them at all. 
      </p>
      </div>      
  ), (
      <div>
      <p>
        However, as soon as someone earned their eight hundred and first dollar, that dollar would be taxed at the exorbitant <strong> marginal rate </strong> of three percent, or three cents. If they made $802, their tax bill would be six cents; $803 would put them on the hook for nine cents, and so on.
      </p>
      <p>
        Notice that when someone earned $801, we say they had been bumped into the higher three percent tax bracket, but that did NOT mean they paid three percent of $801. Their tax bill was only three cents, or three percent -- the marginal rate -- of that one dollar they earned above the $800 cutoff.
      </p>
      
      </div>
  ),
  (
      <div >
      <p>
        An over-$800-earner in 1861 would be in the three percent tax bracket, but their <strong>effective tax rate</strong>, or their tax due as a percentage of their income, would be much lower than three percent. For example, someone who earned $1,000 that year would pay the marginal rate of three percent on $200 (the difference between $800 and $1,000) which comes out to be $6. The effective tax rate -- or the tax due divided by total income earned -- would be 0.6% ($6 / $10,000).
      </p>
      <p>
        When you plot out effective tax rate as a function of income, you'll see that the effective rate is always less than the marginal rate though it gets closer to the marginal rate as a taxpayer earns more.
      </p>
      </div>

  ),
  (
      <div>
      <p>
        Now let's look at what happened in the second year of the Civil War -- 1862 -- to see what happens when you start adding more brackets. That year, congress decided that the tax system needed a little tweaking. Instead of keeping the first $800 tax free, they lowered the cutoff to $600 (about $16,000 in today's dollars), and that expanded the number of earners who would need to pay at least some tax. They also decided to soak the rich; those earning over $10,000 (about $250k in today's dollars) got bumped up into a new, higher five percent bracket.
      </p>
      </div>
  ),
  (
    <div>
      <p>
        Just like the eight hundred and first dollar earned in 1861, that six hundred and first dollar in 1862 would bump you into the three percent tax bracket, and Cornelious Vanderbilt (a rich guy who earned well over $10,000) would have paid zero percent on his first $600, the three percent on dollars 601 through 10,000 (a total of $282 for those of you playing along at home), and the marginal rate of five percent on all the rest.
      </p>
      </div>
  ),
  (
      <div>
      <p>
        You'll notice that when we add more than one non-zero tax bracket, the plot of the effective tax rate starts to look "bumpy". When income crosses into a new, higher tax bracket, each new dollar gets taxed at a higher marginal rate which causes the effective tax rate to start growing faster than it had been under the lower marginal rate.
      </p>
      </div>
  ),
  (
      <div>
      <p>
        Jumping forward about 160 years, today's tax brackets work pretty much the same as they did back then; the only real difference is that we now tend to slice income into more brackets and we don't usually use nice round numbers to separate them. Oh, and marginal rates tend to be a little bit higher than three and five percent. But if a taxpayer from 1862 were to look at a basic tax system we see today -- this one being for a single US federal taxpayer who takes the standard deduction in 2021, but that's neither here nor there, that 1862 time traveler probably wouldn't have much trouble figuring out how to calculate his tax bill.
      </p>
      <p>
        And now you, being an enlightened modern taxpayer and video-watcher, should be able to   like a pro about marginal tax rates, effective tax rates, and tax brackets. 
      </p>
      </div>

  ),
  (
      <div>
      </div>
  )
]

  export default slides