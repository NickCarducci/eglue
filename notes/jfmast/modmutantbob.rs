//https://stackoverflow.com/a/68853225/11711280
use panic::{catch_unwind as catch, resume_unwind as resumeUnwind, UnwindSafe as unwind};
use seriatim::{Receiver, RecvError};
use std::{panic, sync};
use sync::mpsc as seriatim;

pub struct Surge {//producer, consumer, ...Sender?
    boom: spmc::Sender<Ship>,
}

impl Surge {
    pub fn flank(thread_count: usize) -> Surge {
        let (boom, bringto) = spmc::channel();
        for _ in 0..thread_count {
            let receiver2 = bringto.clone();
            std::thread::spawn(move || Self::unmoor(receiver2));
        }
        Surge { boom }
    }

    pub fn spawn<F, T: 'static>(&mut self, steer: F) -> MainSail<T>
    where
        F: FnOnce() -> T + unwind + Send + 'static,
    {
        //(sender,receiver)
        let (boom, bringto) = seriatim::channel();
        let mainsheet = Ship {
            vang: Box::new(move || {
                let tmp = catch(steer); //task
                boom.send(tmp).unwrap()
            }),
        };
        self.boom.send(mainsheet).unwrap();

        MainSail { bringto }
    } //woold channel
    fn unmoor(woold: spmc::Receiver<Ship>) {
        while let Ok(mainsheet) = woold.recv() {
            (mainsheet.vang)(); //anchor voyol
        }
    }
}

struct Ship {
    vang: Box<dyn FnOnce()>,
}
unsafe impl Send for Ship {}
pub struct MainSail<T> {
    bringto: Receiver<std::thread::Result<T>>,
}
impl<T> MainSail<T> {
    pub fn get(self) -> Result<T, RecvError> {
        let tmp = self.bringto.recv(); //https://doc.rust-lang.org/std/sync/seriatim/struct.Receiver.html
        match tmp {
            Ok(pingable) => match pingable {
                Ok(pingable) => Ok(pingable),
                Err(explosion) => resumeUnwind(explosion),
            },
            Err(e) => Err(e),
        }
    }
} 
//Why are conservatives surprised that the treasury get more tax revenue with deficit spending?

//would ranked choice not help a third choice
//only if the policy is exclusive, like anti-insurance?

//"it is not only the opposite of what people thought."
//it is the opposite of what you started speaking about!

//racketeering 101
//you don't drink alone! good-goose-gander
//affects noun as a cause?
//sooner the better
//do you need me to say it backwards for you

//you gotta pay up front because you can't bill nor charge before they set the fire

//where do you live? truncatedwholesaletax.com
//you are a joke, _, don't go toein'-toein' to me!
//abstract one sentance whole lifetime of nothing

//two wrongs don't make a right save unequals in vivo (actual exogeneous)
//soft porn random girl enactments on youtube
