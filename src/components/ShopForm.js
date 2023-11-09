import {useState} from "react";
import {generateShopItems} from "../service/GenerateService";
import {useChatContext} from "../context/ChatContext";


export function ShopForm() {

    const { setChatData } = useChatContext();

    async function generate() {
        const generationRequest = {
            rarity: rarityState,
            alignment: alignmentState,
            tone: toneState,
            shopType: shopTypeState
        }
        let results = await generateShopItems(generationRequest);
        console.log('results=', results);
        setChatData(results);
    }

    const [generatedPrompt, setGeneratedPrompt] = useState("");

    const [shopTypeState, setShopTypeState] = useState('POTIONS');
    const [rarityState, setRarityState] = useState('any');
    const [toneState, setToneState] = useState('any');
    const [alignmentState, setAlignmentState] = useState('any');

    return (
        <form>
            <div className="col">
                <div className="form-group row">
                    <div className="col-6">
                        <label>Shop Type</label>
                        <select className="form-control form-select-sm mb-3" onChange={(e) => setShopTypeState(e.target.value)}>
                            <option value={'POTIONS'}>Potions Shop</option>
                            <option value={'MAGIC_ITEM'}>Magic Item Shop</option>
                            <option value={'TAVERN'}>Tavern</option>
                            <option value={'WEAPONS'}>Weapons Shop</option>
                            <option value={'GENERAL'}>General Store</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label>Rarity</label>
                    <div className="col-1">

                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="rarity-radial"
                                   value="any" checked={rarityState === 'any'} onChange={() => setRarityState('any')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Any
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="rarity-radial"
                                   value="common" checked={rarityState === 'common'} onChange={() => setRarityState('common')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Common
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="rarity-radial"
                                   value="uncommon" checked={rarityState === 'uncommon'} onChange={() => setRarityState('uncommon')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Uncommon
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="rarity-radial"
                                   value="rare" checked={rarityState === 'rare'} onChange={() => setRarityState('rare')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Rare
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="rarity-radial"
                                   value="legendary" checked={rarityState === 'legendary'} onChange={() => setRarityState('legendary')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Legendary
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label>Alignment</label>
                    <div className="col-1">

                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="alignment-radial"
                                   value="any" checked={alignmentState === 'any'} onChange={() => setAlignmentState('any')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Any
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="alignment-radial"
                                   value="good" checked={alignmentState === 'good'} onChange={() => setAlignmentState('good')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Good
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="alignment-radial"
                                   value="neutral" checked={alignmentState === 'neutral'} onChange={() => setAlignmentState('neutral')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Neutral
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="alignment-radial"
                                   value="evil" checked={alignmentState === 'evil'} onChange={() => setAlignmentState('evil')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Evil
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label>Tone</label>
                    <div className="col-1">

                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="silliness-radial"
                                   value="any" checked={toneState === 'any'} onChange={() => setToneState('any')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Any
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="silliness-radial"
                                   value="silly" checked={toneState === 'silly'} onChange={() => setToneState('silly')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Silly
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="silliness-radial"
                                   value="serious" checked={toneState === 'serious'} onChange={() => setToneState('serious')}/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Serious
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={generate}>Generate Shop Inventory</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <h5>{generatedPrompt}</h5>
            </div>

        </form>
    );
}